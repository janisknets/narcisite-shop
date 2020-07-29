import React from 'react';
// import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../../molecules/navigation';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
  decorators: [
    (getStory) => <MemoryRouter>{getStory()}</MemoryRouter>,
  ],
};

export const SimpleNavigation = () => <Navigation />;
