import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Ashok.module.css';

const Ashok = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Ashok</h1>
        <p>This is the profile page for Ashok.</p>
      </div>
      <Footer />
    </>
  );
};

export default Ashok;
