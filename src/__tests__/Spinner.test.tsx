import React from "react";
import { render } from "@testing-library/react";

import { Spinner } from "../components/SpinnerComponent";

describe("test category", () => {
	it("Spinner matches snapshot", () => {
		const { asFragment } = render(<Spinner />);

		expect(asFragment()).toMatchSnapshot();
	});
});
