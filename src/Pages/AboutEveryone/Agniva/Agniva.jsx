import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Agniva.module.css';

const Agniva = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Agniva</h1>
        <p>This is the profile page for Agniva.</p>
      </div>
      <Footer />
    </>
  );
};

export default Agniva;
