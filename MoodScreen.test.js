import React from 'react';

import renderer from 'react-test-renderer';
import MoodScreen from './MoodScreen';


//Snapshot testing checks if all the components that are suppose to render are properly rendered for each run
it('renders without crashing', () => {
  const rendered = renderer.create(<MoodScreen />).toJSON();
  expect(rendered).toBeTruthy();
});