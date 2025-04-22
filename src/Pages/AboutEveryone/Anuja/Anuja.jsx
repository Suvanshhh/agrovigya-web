import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Anuja.module.css';

const Anuja = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Anuja</h1>
        <p>This is the profile page for Anuja.</p>
      </div>
      <Footer />
    </>
  );
};

export default Anuja;
