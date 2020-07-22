import React from 'react';
import renderer from 'react-test-renderer';
import Box from './box';

it('Box renders correctly', () => {
  const tree = renderer
    .create(<Box />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
