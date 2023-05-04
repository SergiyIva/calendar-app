import { render, screen } from "@testing-library/react";
import { ErrorScreen } from "./ErrorScreen";

describe("ErrorScreen", () => {
  it("renders correct", () => {
    render(<ErrorScreen error={"TestError"} />);
    expect(
      screen.getByRole("heading", { name: /testerror/i })
    ).toBeInTheDocument();
  });
});
