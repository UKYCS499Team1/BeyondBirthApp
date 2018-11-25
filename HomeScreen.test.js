import React from 'react';

import renderer from 'react-test-renderer';
import HomeScreen from './HomeScreen';


//Snapshot testing checks if all the components that are suppose to render are properly rendered for each run
it('renders without crashing', () => {
  const rendered = renderer.create(<HomeScreen />).toJSON();
  expect(rendered).toBeTruthy();
});