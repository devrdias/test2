import React, {
  FunctionComponent,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AccessibilityInfo } from 'react-native';
import { AccessibilityContextProps } from './types';

export const AccessibilityContext = createContext<AccessibilityContextProps>({
  isScreenReaderEnabled: false,
  isBoldTextEnabled: false,
  isGrayscaleEnabled: false,
  isInvertColorsEnabled: false,
  isReduceMotionEnabled: false,
  isReduceTransparencyEnabled: false,
});

export const useAccessibility = (): AccessibilityContextProps => useContext(AccessibilityContext);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: FunctionComponent<AccessibilityProviderProps> = ({
  children,
}) => {
  const [accessibilityStatus, setAccessibilityStatus] = useState<AccessibilityContextProps>({
    isScreenReaderEnabled: false,
    isBoldTextEnabled: false,
    isGrayscaleEnabled: false,
    isInvertColorsEnabled: false,
    isReduceMotionEnabled: false,
    isReduceTransparencyEnabled: false,
  });

  useEffect(() => {
    const updateAccessibilityStatus = async () => {
      const [
        screenReaderEnabled,
        boldTextEnabled,
        grayscaleEnabled,
        invertColorsEnabled,
        reduceMotionEnabled,
        reduceTransparencyEnabled,
      ] = await Promise.all([
        AccessibilityInfo.isScreenReaderEnabled(),
        AccessibilityInfo.isBoldTextEnabled(),
        AccessibilityInfo.isGrayscaleEnabled(),
        AccessibilityInfo.isInvertColorsEnabled(),
        AccessibilityInfo.isReduceMotionEnabled(),
        AccessibilityInfo.isReduceTransparencyEnabled(),
      ]);

      setAccessibilityStatus({
        isScreenReaderEnabled: screenReaderEnabled,
        isBoldTextEnabled: boldTextEnabled,
        isGrayscaleEnabled: grayscaleEnabled,
        isInvertColorsEnabled: invertColorsEnabled,
        isReduceMotionEnabled: reduceMotionEnabled,
        isReduceTransparencyEnabled: reduceTransparencyEnabled,
      });
    };

    const accessibilityEventListeners = [
      AccessibilityInfo.addEventListener('screenReaderChanged', updateAccessibilityStatus),
      AccessibilityInfo.addEventListener('boldTextChanged', updateAccessibilityStatus),
      AccessibilityInfo.addEventListener('grayscaleChanged', updateAccessibilityStatus),
      AccessibilityInfo.addEventListener('invertColorsChanged', updateAccessibilityStatus),
      AccessibilityInfo.addEventListener('reduceMotionChanged', updateAccessibilityStatus),
      AccessibilityInfo.addEventListener('reduceTransparencyChanged', updateAccessibilityStatus),
    ];

    updateAccessibilityStatus();

    return () => {
      accessibilityEventListeners.forEach((listener) => listener.remove());
    };
  }, []);

  return (
    <AccessibilityContext.Provider value={accessibilityStatus}>
      {children}
    </AccessibilityContext.Provider>
  );
};
