import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("shows 6 products by default", async () => {
  render(<App />);
  const headings = await screen.findAllByRole("heading");
  expect(headings).toHaveLength(6);
});

test("clicking on the button loads 6 more products", async () => {
  render(<App />);
  const button = await screen.findByRole("button", { name: /load more/i });
  userEvent.click(button);

  await waitFor(async () => {
    const headings = await screen.findAllByRole("heading");
    expect(headings).toHaveLength(12);
  });
  // clicking the button load more button and elements will load after couple of seconds so we are waiting with waitFor
});
