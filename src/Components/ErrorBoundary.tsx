import React, { ErrorInfo, ReactNode } from "react";
import { ErrorScreen } from "./ErrorScreen/ErrorScreen";

interface Props {
  children?: ReactNode;
}
interface State {
  error?: Error | null;
}
export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return {
      error
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render(): ReactNode {
    const { error } = this.state;

    if (error) return <ErrorScreen error={error.message} />;
    return this.props.children;
  }
}
