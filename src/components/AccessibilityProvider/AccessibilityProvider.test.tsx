import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { AccessibilityProvider, useAccessibility } from './AccessibilityProvider';

afterEach(cleanup);

describe('AccessibilityProvider', () => {
  it('should render children and provide accessibility context', () => {
    const TestComponent = () => {
      const accessibility = useAccessibility();
      return (
        <React.Fragment>
          <Text testID="label1">Test Component</Text>
          <Text testID="label2">
            Screen Reader Enabled: {accessibility.isScreenReaderEnabled.toString()}
          </Text>
        </React.Fragment>
      );
    };

    const { getByTestId } = render(
      <AccessibilityProvider>
        <TestComponent />
      </AccessibilityProvider>
    );

    expect(getByTestId('label1')).toBeDefined();
    expect(getByTestId('label2')).toBeDefined();
  });
});
