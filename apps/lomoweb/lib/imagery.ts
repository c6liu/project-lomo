/**
 * Central registry for editorial photography.
 *
 * Every photo the marketing pages render is declared here, so replacing the
 * current stand-in shots is a single-file edit rather than a hunt through
 * section components.
 *
 * Alt text lives beside each entry because it describes the *intended subject*
 * of the slot, not the file currently sitting in it. That means it stays
 * accurate when the photo behind it is swapped, and screen-reader users get a
 * meaningful description either way.
 *
 * To swap a photo:
 *   1. Drop the new file into `public/`.
 *   2. Change only that entry's `src`.
 *   3. Revisit `alt` only if the new photo depicts something different.
 */

export interface Photo {
	/** Path under `public/`. */
	src: string;
	/** Describes the intended subject of this slot. Empty only for decorative art. */
	alt: string;
}

/**
 * The stand-in asset. Every slot still pointing at this is awaiting real
 * photography — grep for `PLACEHOLDER_PHOTO` to find what's outstanding.
 */
export const PLACEHOLDER_PHOTO = "/lomo-bg.jpg";

/** Hero artwork. Decorative: the headline beside it already carries the message. */
export const HERO_ILLUSTRATION: Photo = {
	src: "/hero.png",
	alt: "",
};

/** "Find What You Need" — keyed by category. */
export const FIND_PHOTOS: Record<string, Photo> = {
	grocery: { src: PLACEHOLDER_PHOTO, alt: "Grocery sharing in the community" },
	checkins: { src: PLACEHOLDER_PHOTO, alt: "Neighbors checking in on each other" },
	crisis: { src: PLACEHOLDER_PHOTO, alt: "Community crisis support fund" },
	meals: { src: PLACEHOLDER_PHOTO, alt: "Warm meals shared between neighbors" },
};

/** "Share What You Can" — keyed by category. */
export const SHARE_PHOTOS: Record<string, Photo> = {
	supplies: { src: PLACEHOLDER_PHOTO, alt: "Community member dropping off supplies" },
	microgrant: { src: PLACEHOLDER_PHOTO, alt: "Funding a microgrant for a neighbour" },
	produce: { src: PLACEHOLDER_PHOTO, alt: "Sharing garden produce with the community" },
};

/** "Join The Circle" — the single oval image above the sign-up call to action. */
export const JOIN_PHOTO: Photo = {
	src: PLACEHOLDER_PHOTO,
	alt: "Diverse community members gathered together in a warm, supportive circle",
};
