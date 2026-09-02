import { stripHtmlToText } from "./resendInboundHttp";

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const expect: (actual: unknown) => {
	toBe: (expected: unknown) => void;
};

describe("stripHtmlToText", () => {
	it("strips standard script and style tags along with content", () => {
		const html = "<div>Hello<script>alert(1)</script><style>body { color: red; }</style> World</div>";
		expect(stripHtmlToText(html)).toBe("Hello World");
	});

	it("strips script tags with spaces or attributes in closing tags", () => {
		const htmlWithSpace = "<p>Message<script>alert(1)</script > visible</p>";
		expect(stripHtmlToText(htmlWithSpace)).toBe("Message visible");

		const htmlWithAttr = "<p>Message<script>alert(1)</script foo=\"bar\"> visible</p>";
		expect(stripHtmlToText(htmlWithAttr)).toBe("Message visible");
	});

	it("strips style tags with spaces or attributes in closing tags", () => {
		const htmlWithSpace = "<div>Content<style>h1 { font-size: 20px; }</style > text</div>";
		expect(stripHtmlToText(htmlWithSpace)).toBe("Content text");

		const htmlWithAttr = "<div>Content<style>h1 { font-size: 20px; }</style id=\"css\"> text</div>";
		expect(stripHtmlToText(htmlWithAttr)).toBe("Content text");
	});

	it("strips standard html tags and collapses whitespace", () => {
		const html = "<h1>Title</h1>\n<p>First  paragraph</p>\n<span>Second</span>";
		expect(stripHtmlToText(html)).toBe("Title First paragraph Second");
	});
});
