import React from "react";
import { render, fireEvent, getByLabelText, getByTestId, getByPlaceholderText } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("contains place holders", () => {
  const { getByPlaceholderText } = render(<App />);

  getByPlaceholderText(/edd/i);
  getByPlaceholderText(/burke/i);
});

test("contains submit button", () => {
  const { getByTestId } = render(<App />)

  getByTestId("submit")
})

test("contains correct labels", () => {
  const { getByLabelText } = render(<App />)

  getByLabelText(/Message/i);
  getByLabelText(/Email*/i);
  getByLabelText(/Last Name*/i);
  getByLabelText(/First Name*/i)
})

test("first name input", () => {
  const { getByLabelText } = render(<App />)

  let firstInput = getByLabelText("First Name*");

  expect(firstInput.textContent).toBe("");
})

