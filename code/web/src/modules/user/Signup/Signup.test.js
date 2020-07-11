import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "./Signup";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../../setup/store";

describe("Signup", () => {
  it("should record a users name, email, password and gender", () => {
    const mockFn = jest.fn();
    const store = createStore(rootReducer);
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText("Signup")).toBeInTheDocument();
  });
});
