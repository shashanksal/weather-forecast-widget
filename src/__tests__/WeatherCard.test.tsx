import React from "react";
import { render } from "@testing-library/react";
import WeatherCard from "../components/WeatherCard";

describe("test category", () => {
	it("WeatherCard matches snapshot", () => {
		const { asFragment } = render(<WeatherCard />);
		expect(asFragment()).toMatchSnapshot();
	});
});
