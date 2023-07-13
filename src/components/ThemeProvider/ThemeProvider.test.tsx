import { ReactTestRendererJSON } from 'react-test-renderer';
import React from 'react';
import { Platform, Text } from 'react-native';
import { create } from 'react-test-renderer';
import { DefaultTheme } from 'styled-components/native';
import { ThemeProvider } from './ThemeProvider';
import { styled } from './styled';
import { darkTheme } from './themes';
import { Theme } from './types';

import { hexToRgb } from './utils';

const StyledText = styled(Text)<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.colors.primary.main};
`;

const renderComponent = ({ theme, message }: { theme: Theme; message: string }) => {
  return create(
    <ThemeProvider theme={theme}>
      <StyledText>{message}</StyledText>
    </ThemeProvider>
  );
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('test if ThemeProvider renders with the Light mode selected', () => {
    const tree = renderComponent({
      theme: Theme.Light,
      message: 'light mode',
    }).toTree();
    expect(tree).toHaveProperty('props.theme', Theme.Light);
  });

  it('test if ThemeProvider renders with the Dark mode selected', () => {
    const tree = renderComponent({
      theme: Theme.Dark,
      message: 'dark mode',
    }).toTree();

    expect(tree).toHaveProperty('props.theme', Theme.Dark);
  });

  describe('Check theme props for inner components', () => {
    jest.doMock('react-native', () => ({ Platform: { OS: 'web' } }));
    if (Platform.OS === 'web') {
      it('web', () => {
        const message = 'renders with props on web';
        const { root } = renderComponent({
          theme: Theme.Dark,
          message,
        });
        expect(root.findByType(StyledText).props.children).toStrictEqual(message);

        const tree = renderComponent({
          theme: Theme.Dark,
          message,
        }).toJSON() as ReactTestRendererJSON;

        expect(tree?.type).toBe('div');
        expect(tree?.props.style).toHaveProperty(
          'color',
          hexToRgb(darkTheme.colors.neutral.background)
        );
      });
    }

    jest.doMock('react-native', () => ({ Platform: { OS: 'ios' } }));
    if (Platform.OS === 'ios') {
      it('ios', () => {
        const message = 'renders with props on ios';
        const { root } = renderComponent({
          theme: Theme.Dark,
          message,
        });
        expect(root.findByType(StyledText).props.children).toStrictEqual(message);

        const tree = renderComponent({
          theme: Theme.Dark,
          message,
        }).toJSON() as ReactTestRendererJSON;
        expect(tree?.type).toBe('Text');
        expect(tree).toHaveStyleRule('color', darkTheme.colors.primary.main);
      });
    }

    jest.doMock('react-native', () => ({ Platform: { OS: 'android' } }));
    if (Platform.OS === 'android') {
      it('android', () => {
        const message = 'renders with props on android';
        const { root } = renderComponent({
          theme: Theme.Dark,
          message,
        });
        expect(root.findByType(StyledText).props.children).toStrictEqual(message);

        const tree = renderComponent({
          theme: Theme.Dark,
          message,
        }).toJSON() as ReactTestRendererJSON;
        expect(tree?.type).toBe('Text');
        expect(tree).toHaveStyleRule('color', darkTheme.colors.primary.main);
      });
    }
  });
});
