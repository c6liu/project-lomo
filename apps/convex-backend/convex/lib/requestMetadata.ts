function parseDraft(payloadJson: string | undefined): Record<string, unknown> | null {
	if (!payloadJson) {
		return null;
	}
	try {
		const parsed = JSON.parse(payloadJson) as { draft?: Record<string, unknown> };
		return parsed.draft ?? null;
	}
	catch {
		return null;
	}
}

function nestedRecord(value: unknown): Record<string, unknown> | null {
	if (typeof value === "object" && value !== null && !Array.isArray(value)) {
		return value as Record<string, unknown>;
	}
	return null;
}

/** Whether the requester asked for delivery (food/items flows). */
export function extractNeedsDelivery(
	category: string,
	payloadJson: string | undefined,
): boolean {
	const draft = parseDraft(payloadJson);
	if (!draft) {
		return false;
	}

	switch (category) {
		case "food":
			return nestedRecord(draft.foodDetails)?.needsDelivery === true;
		case "items":
			return nestedRecord(draft.itemsDetails)?.needsDelivery === true;
		default:
			return false;
	}
}

/** Whether the request was marked as urgent when posted. */
export function extractIsUrgent(payloadJson: string | undefined): boolean {
	const draft = parseDraft(payloadJson);
	return draft?.urgency === "urgent";
}

const LEGACY_URGENT_DETAILS = /\burgency:\s*urgent\b/i;

function urgencyTextIndicatesUrgent(text: string | undefined): boolean {
	return text != null && LEGACY_URGENT_DETAILS.test(text);
}

/** Resolve urgency from denormalized field, payload snapshot, or legacy details text. */
export function resolveIsUrgent(request: {
	isUrgent?: boolean;
	payload?: string;
	details?: string;
	summary?: string;
}): boolean {
	if (request.isUrgent === true) {
		return true;
	}
	if (extractIsUrgent(request.payload)) {
		return true;
	}
	return urgencyTextIndicatesUrgent(request.details)
		|| urgencyTextIndicatesUrgent(request.summary);
}
