import { screen } from "@testing-library/react";
import ConnectButton from ".";

describe("ConnectButton", () => {
  test("it renders a connect button", () => {
    render(<ConnectButton />);
    const button = screen.queryByClassName("connect-button");
    expect(button).toBeInTheDocument();
  });
});
