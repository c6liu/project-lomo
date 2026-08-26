import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Guards the radius scale against silently diverging between route groups.
 *
 * `@repo/ui` inherits Radix's radius system, where `--radius-full` defaults to
 * `0px` and only resolves to a pill under `[data-radius="full"]`:
 *
 *   .rounded-full           { border-radius: var(--radius-full) }
 *   :root, [data-radius=medium] { --radius-factor: 2;   --radius-full: 0px }
 *   [data-radius=full]          { --radius-factor: 2.5; --radius-full: 9999px }
 *
 * LoMo's visual language is pill-based end to end, so the root layout opts the
 * whole document in exactly once. When each route group set its own
 * `data-radius` instead, `/app` was missed — and every `rounded-full` under it
 * (avatars, status dots, the notification badge, filter pills, skeletons)
 * rendered as a 0px square while the homepage rendered pills.
 */

const APP_DIR = join(__dirname, "..");
const ROOT_LAYOUT = join(APP_DIR, "layout.tsx");

const TS_SOURCE = /\.tsx?$/;
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//g;
const LINE_COMMENT = /(^|[^:])\/\/.*$/gm;
const DATA_RADIUS_ATTRIBUTE = /data-radius=/;
const ROOT_OPTS_INTO_PILL_SCALE = /data-radius="full"/;

/**
 * Tailwind's stock radii (`--radius-sm` … `--radius-4xl`) are fixed pixel
 * values that ignore `--radius-factor`, so they drift away from the token ramp
 * the rest of the app scales with. Only `rounded-1` … `rounded-6` and
 * `rounded-full` track the design system.
 */
const RAW_TAILWIND_RADIUS = /\brounded-(?:sm|md|lg|xl|2xl|3xl|4xl)\b/g;

function appSourceFiles(): string[] {
	return readdirSync(APP_DIR, { recursive: true, encoding: "utf-8" })
		.filter(relative => TS_SOURCE.test(relative))
		.filter(relative => !relative.includes("__tests__"))
		.map(relative => join(APP_DIR, relative));
}

/**
 * Drops block and line comments so prose that merely *documents* the radius
 * scale isn't mistaken for an override.
 */
function withoutComments(source: string): string {
	return source
		.replace(BLOCK_COMMENT, "")
		.replace(LINE_COMMENT, "$1");
}

describe("radius values come from the token ramp", () => {
	it("no file uses Tailwind's stock radii instead of the token scale", () => {
		const offenders = appSourceFiles()
			.map(file => ({
				file: file.slice(APP_DIR.length + 1),
				matches: withoutComments(readFileSync(file, "utf-8")).match(RAW_TAILWIND_RADIUS),
			}))
			.filter((entry): entry is { file: string; matches: RegExpMatchArray } => entry.matches !== null);

		if (offenders.length > 0) {
			const detail = offenders
				.map(({ file, matches }) => `  ${file}: ${[...new Set(matches)].join(", ")}`)
				.join("\n");
			expect.fail(
				`Use the token radius ramp (rounded-1…rounded-6, rounded-full) so radii scale with --radius-factor.\n`
				+ `Tailwind's stock radii are fixed pixel values and break that.\n${detail}`,
			);
		}

		expect(offenders).toEqual([]);
	});
});

describe("radius scale is set once, at the document root", () => {
	it("the root layout opts the whole document into the pill radius scale", () => {
		const source = readFileSync(ROOT_LAYOUT, "utf-8");

		expect(source).toMatch(ROOT_OPTS_INTO_PILL_SCALE);
	});

	it("no other file overrides data-radius, which would fork the radius scale per route group", () => {
		const offenders = appSourceFiles()
			.filter(file => file !== ROOT_LAYOUT)
			.filter(file => DATA_RADIUS_ATTRIBUTE.test(withoutComments(readFileSync(file, "utf-8"))))
			.map(file => file.slice(APP_DIR.length + 1));

		if (offenders.length > 0) {
			expect.fail(
				`data-radius must only be set in app/layout.tsx so every route group shares one radius scale.\n`
				+ `Found overrides in:\n${offenders.map(f => `  ${f}`).join("\n")}`,
			);
		}

		expect(offenders).toEqual([]);
	});
});
