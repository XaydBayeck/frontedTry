import type { Component } from 'solid-js';

import styles from './App.module.css';
// import LoginIndex from './pages/login/LoginIndex';
import User from './pages/views/user/User';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}> </header>
      <User />
    </div>
  );
};

export default App;
