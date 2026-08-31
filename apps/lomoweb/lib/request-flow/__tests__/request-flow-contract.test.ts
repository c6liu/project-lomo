import { describe, expect, it } from "vitest";
import {
	getCategoryRoute,
	REQUEST_CATEGORIES,
	REQUEST_CATEGORY_ROUTE_MAP,
} from "../categories";
import { emptyDraft } from "../types";

describe("request flow contract", () => {
	it("keeps draft defaults centralized in the shared request model", () => {
		const draft = emptyDraft();

		expect(draft.category).toBeNull();
		expect(draft.foodKind).toBeNull();
		expect(draft.urgency).toBeNull();
		expect(draft.foodDetails.groceryNoPreference).toBe(false);
		expect(draft.itemsDetails.itemDescription).toBe("");
		expect(draft.otherDetails.whatNeed).toBe("");
		expect(draft.micrograntDetails.needType).toBeNull();
		expect(draft.ceremonyDetails.role).toBeNull();
	});

	it("uses a single shared route registry for each request category", () => {
		expect(REQUEST_CATEGORIES.map(category => category.id)).toEqual(
			Object.keys(REQUEST_CATEGORY_ROUTE_MAP),
		);
		expect(getCategoryRoute("food")).toBe("/app/request/food/kind");
		expect(getCategoryRoute("items")).toBe("/app/request/items/details");
		expect(getCategoryRoute("other")).toBe("/app/request/other/details");
		expect(getCategoryRoute("support")).toBe("/app/request/support/details");
		expect(getCategoryRoute("paperwork")).toBe("/app/request/paperwork/details");
		expect(getCategoryRoute("ceremony")).toBe("/app/request/ceremony/role");
	});
});
