import React from 'react';
import { action } from '@storybook/addon-actions';
import Box from '../../atoms/box';

export default {
  title: 'Atoms/Box',
  component: Box,
};

export const Text = () => <Box clickEffect={action('clicked')} text="test box" />;
