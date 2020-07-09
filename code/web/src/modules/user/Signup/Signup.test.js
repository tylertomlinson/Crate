import React from "react";
import { render, fireEvent, waitFor, getAllByPlaceholderText, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from './Signup';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';


import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../../setup/store'
import * as actions from '../api/actions'

describe("Signup", () => {
  it.skip('should record a users name, email, password and gender', () => {
    const mockFn = jest.fn();
    const store = createStore(rootReducer);
    const { getByText, getByPlaceholderText, getByRole } = render(
    <MemoryRouter>
      <Provider store={store}>
        <Signup register={mockFn}/>
      </Provider>
    </MemoryRouter>);
    
    fireEvent.change(getByPlaceholderText('Name'), {
      target: {value: 'Kimia'}
    });

    fireEvent.change(getByPlaceholderText('Email'), {
      target: {value: 'Kimia@yahoo.com'}
    });

    fireEvent.change(getByPlaceholderText('Password'), {
      target: {value: 'password123'}
    });

    fireEvent.change(getByRole('combobox'), {
      target: {value: 1}
    });

    fireEvent.click(getByText('Signup', {exact: false}))

    expect(mockFn).toHaveBeenCalledWith({user: {name: 'Kimia', email: 'Kimia@yahoo.com', password: 'password123', gender: 1}})
  });

  
})