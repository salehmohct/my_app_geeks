import { Component } from "react";
import FallBackError from "./FallBackError";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return <FallBackError />;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
