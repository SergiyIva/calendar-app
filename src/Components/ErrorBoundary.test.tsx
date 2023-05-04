import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  const ErrorComponent = () => {
    const throwError = () => {
      throw new Error("Test error");
    };
    return <div>{throwError()}</div>;
  };
  it("correct catch error and show error message", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );
    expect(
      screen.getByRole("heading", { name: /test error/i })
    ).toBeInTheDocument();
  });
  it("displays children component without error", () => {
    const ClearComponent = () => {
      return <div data-testid={"clearComponent"}>Some child</div>;
    };
    render(
      <ErrorBoundary>
        <ClearComponent />
      </ErrorBoundary>
    );
    expect(screen.getByTestId("clearComponent")).toBeInTheDocument();
  });
});
