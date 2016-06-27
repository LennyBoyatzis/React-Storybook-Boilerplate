import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import styles from './styles.css';
import History from './historyComponent';

storiesOf('History', module)
  .add('with a text', () => (
    <History className={styles.background} />
  ))
