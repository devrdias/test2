import { ComponentType } from 'react';
import styledComponents from 'styled-components/native';

type StyledFunction = <T extends ComponentType<any>>(
  component: T
) => ReturnType<typeof styledComponents>;

const styled: StyledFunction = (component) => styledComponents(component);

export { styled };
