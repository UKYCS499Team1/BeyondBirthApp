import React from 'react';

import renderer from 'react-test-renderer';
import VideoScreen from './VideoScreen';

it('renders without crashing', () => {
  const rendered = renderer.create(<VideoScreen />).toJSON();
  expect(rendered).toBeTruthy();
});