import type { Component } from 'solid-js';

import styles from './App.module.css';
import LoginIndex from './pages/login/LoginIndex';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}> </header>
      <LoginIndex />
    </div>
  );
};

export default App;
