import React, { Component, ErrorInfo, ReactNode } from 'react';

interface JestErrorBoundaryProps {
  children: ReactNode;
}

interface JestErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class JestErrorBoundary extends Component<JestErrorBoundaryProps, JestErrorBoundaryState> {
  constructor(props: JestErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can perform additional error handling or logging here
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return <div>Test failed with error: {error?.message}</div>;
    }

    return this.props.children;
  }
}

export default JestErrorBoundary;
