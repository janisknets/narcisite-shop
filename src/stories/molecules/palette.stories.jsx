import React from 'react';
// import { action } from '@storybook/addon-actions';
import Palette from '../../molecules/palette';

export default {
  title: 'Molecules/Palette',
  component: Palette,
  parameters: {
    colours: 'An array of colours',
  },
};

export const PaletteDefaultColours = () => <Palette />;
export const PaletteNoColours = () => <Palette colours={[]} />;
export const PaletteOneColour = () => <Palette colours={['Grey']} />;
