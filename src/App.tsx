import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Conteúdo...</h2>
      </main>
      <Footer />
    </>
  );
}

export default App;
