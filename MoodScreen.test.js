import React from 'react';

import renderer from 'react-test-renderer';
import MoodScreen from './MoodScreen';

it('renders without crashing', () => {
  const rendered = renderer.create(<MoodScreen />).toJSON();
  expect(rendered).toBeTruthy();
});