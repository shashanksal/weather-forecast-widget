import React from "react";
import { render } from "@testing-library/react";

import MainBody from "../components/MainBody";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";

type DispatchExts = ThunkDispatch<any, void, any>;
const middlewares = [thunk];
const mockStore = configureMockStore<any, DispatchExts>(middlewares);
const mStore = mockStore();

describe("test category", () => {
	it("MainBody matches snapshot", () => {
		const { asFragment } = render(
			<Provider store={mStore}>
				<MainBody />
			</Provider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
