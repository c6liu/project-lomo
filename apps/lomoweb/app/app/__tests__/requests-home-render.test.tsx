import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RequestCardLink } from "../home-dashboard-panel";

const LINK_NAME = /need help with groceries/i;

describe("requestCardLink", () => {
	it("renders the card content and destination link", () => {
		render(
			<RequestCardLink
				href="/app/offer/req-1"
				title="Need help with groceries"
				summary="I need a couple of groceries this week."
				badges={<span>Urgent</span>}
			/>,
		);

		expect(screen.getByRole("link", { name: LINK_NAME })).toHaveAttribute(
			"href",
			"/app/offer/req-1",
		);
		expect(screen.getByText("I need a couple of groceries this week.")).toBeInTheDocument();
		expect(screen.getByText("Urgent")).toBeInTheDocument();
	});
});
