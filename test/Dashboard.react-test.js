import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './client/components/dashboard/dashboard.js';

it('renders the dashboard component', () => {
  const dash = renderer.create(
    <Dashboard />
  ).toJSON();
  expect(dash).toMatchSnapshot();
});
