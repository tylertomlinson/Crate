import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Survey from "./Survey";
import { MemoryRouter } from "react-router-dom";
import * as action from "../../api/actions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import { Provider } from "react-redux";

describe("Survey", () => {
  let store;
  beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);
  });

  it("should render a female survey when passed 2 as a users gender", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Survey gender={2} id={2} user={{ name: "brian" }} />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText("Dresses")).toBeInTheDocument();
  });

  it("should render a female survey when passed 2 as a users gender", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Survey gender={1} id={2} user={{ name: "brian" }} />
        </Provider>
      </MemoryRouter>
    );
    expect(getByText("Suits")).toBeInTheDocument();
  });

  it("should create an action to record a user's style preference upon completion of the survey", () => {
    return store.dispatch(action.querySurvey(4)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: "SURVEY", user: { style: "vintage" } });
    });
  });
});
