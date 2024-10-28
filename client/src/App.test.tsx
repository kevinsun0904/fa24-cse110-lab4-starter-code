import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import assert from 'assert';

test("add expense", () => {
  render(<App />);

  const nameInput = screen.getByTestId("name-input");
  const costInput = screen.getByTestId("cost-input");
  const submit = screen.getByTestId("submit-expense");

  fireEvent.change(nameInput, { target: { value: "hello" } });
  fireEvent.change(costInput, { target: { value: "100" } });
  fireEvent.click(submit);

  const newName = screen.getByText("hello");
  expect(newName).toBeInTheDocument();

  const remaining = screen.getByText("Remaining: $900");
  expect(remaining).toBeInTheDocument();
})

test("delete expense", () => {
  render(<App />);

  const nameInput = screen.getByTestId("name-input");
  const costInput = screen.getByTestId("cost-input");
  const submit = screen.getByTestId("submit-expense");

  fireEvent.change(nameInput, { target: { value: "hello" } });
  fireEvent.change(costInput, { target: { value: "100" } });
  fireEvent.click(submit);

  const deleteButton = screen.getByText("x");

  const newName = screen.getByText("hello");

  fireEvent.click(deleteButton);

  expect(newName).not.toBeInTheDocument();

  const remaining = screen.getByText("Remaining: $1000");
  expect(remaining).toBeInTheDocument();
})

test("budget", () => {
  render(<App />);
  
  const nameInput = screen.getByTestId("name-input");
  const costInput = screen.getByTestId("cost-input");
  const submit = screen.getByTestId("submit-expense");

  fireEvent.change(nameInput, { target: { value: "hello" } });
  fireEvent.change(costInput, { target: { value: "100" } });
  fireEvent.click(submit);

  const budget = screen.getByText("Budget: $1000");
  const remaining = screen.getByText("Remaining: $900");
  const spent = screen.getByText("Spent so far: $100");

  expect(budget).toBeInTheDocument();
  expect(remaining).toBeInTheDocument();
  expect(spent).toBeInTheDocument();
})
