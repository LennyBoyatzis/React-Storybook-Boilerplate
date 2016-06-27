import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import '../node_modules/normalize.css';
import '../components/global-styles.css';

addDecorator((story) => (
  <div style={{height: '100%'}}>
    {story()}
  </div>
));

function loadStories() {
  require('../components/stories/history');
  // require as many as stories you need.
}

configure(loadStories, module);
