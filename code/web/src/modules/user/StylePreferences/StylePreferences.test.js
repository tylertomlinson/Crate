import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StylePreferences from "./StylePreferences";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
describe("StylePreferences", () => {
  it("should render a survey if user has not signed up yet", () => {
    let store = mockStore({
      user: {
        details: {
          name: "Kim",
          email: "Kim@gmail.com",
          gender: 1,
          id: 1,
          style: null,
        },
      },
    });
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <StylePreferences />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText("Fill out your survey profile")).toBeInTheDocument();
  });

  it("should render a user's subscriptions if a user has completed the survey", () => {
    let store = mockStore({
      user: {
        details: {
          name: "Kim",
          email: "Kim@gmail.com",
          gender: 1,
          id: 1,
          style: "casual",
        },
      },
    });
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <StylePreferences />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText("Thank you for taking the survey!")).toBeInTheDocument();
  });
});
