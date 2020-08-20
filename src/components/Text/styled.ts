import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const TEXT_MODIFIERS = {
  header1: () =>
    'font-size: 4.2rem; letter-spacing: 0.84px; font-weight: semibold;',
  header2: () =>
    'font-size: 3.6rem; letter-spacing: 0.72px; font-weight: semibold;',
  header3: () =>
    'font-size: 3rem; letter-spacing: 0.6px; font-weight: semibold;',
  header4: () =>
    'font-size: 2.6rem; letter-spacing: 0.52px; font-weight: semibold;',
  header5: () =>
    'font-size: 2.4rem; letter-spacing: 0.48px; font-weight: semibold;',
  body: () => 'font-size: 2rem; letter-spacing: 0.4px;',
  margSmall: () => 'margin-bottom: 1rem;',
  margMedium: () => 'margin-bottom: 2rem;',
};
export const Text = styled.p`
  font-size: 2rem;
  color: #170c3a;
  ${applyStyleModifiers(TEXT_MODIFIERS)}
`;
