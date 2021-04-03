import React from "react";
import { render } from "@testing-library/react";

import AppHeader from "../components/Header";

describe("test category", () => {
	it("AppHeader matches snapshot", () => {
		const { asFragment } = render(<AppHeader />);
		expect(asFragment()).toMatchSnapshot();
	});
});
