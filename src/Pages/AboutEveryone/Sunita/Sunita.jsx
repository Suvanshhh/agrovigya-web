import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Sunita.module.css';

const Sunita = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Sunita</h1>
        <p>This is the profile page for Sunita.</p>
      </div>
      <Footer />
    </>
  );
};

export default Sunita;
