import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import WeatherWidget from '../components/WeatherWidget';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

type DispatchExts = ThunkDispatch<any, void, any>;
const middlewares = [thunk];
const mockStore = configureMockStore<any, DispatchExts>(middlewares);
const mStore = mockStore();

describe('test category', () => {
	it("WeatherWidget matches snapshot" , () =>{
		const {asFragment} = render(<Provider store={mStore}><WeatherWidget /></Provider>);
		expect(asFragment()).toMatchSnapshot();
	})
})
