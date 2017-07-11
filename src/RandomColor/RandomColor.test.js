import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

function setup() {
  return shallow(
    <RandomColor
      isLoading={false}
      color="#ddd"
      onClick={() => {}}
      text="Click on me to change color"
    />
  );
}

describe('<RandomColor />', () => {
  it('should render self', () => {
    setup();
  });
});
