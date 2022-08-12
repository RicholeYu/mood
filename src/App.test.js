import { render, screen } from "@testing-library/react";
import App from "./App";

test("App", () => {
  render(<App />);
  const linkElement = screen.getByText(/周平均心情指数/i);
  expect(linkElement).toBeInTheDocument();
});

test("App number", () => {
  render(<App />);
  const linkElement = screen.getByText(/五/i);
  expect(linkElement).toBeInTheDocument();
});
