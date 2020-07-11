import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../setup/store";
import * as actions from "../api/actions";

describe("Login", () => {
  it("should render to the DOM", () => {
    const store = createStore(rootReducer);
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText("Login to your account")).toBeInTheDocument();
  });
  
  it("should have a type of AUTH/SET_USER", () => {
    const token = "token";
    const user = {
      name: "Your Mom",
      email: "yourmom@yahoo.com",
      gender: 1,
    };
    const expectedAction = {
      type: "AUTH/SET_USER",
      user,
    };
    const result = actions.setUser(token, user);
    expect(result).toEqual(expectedAction);
  });
});
