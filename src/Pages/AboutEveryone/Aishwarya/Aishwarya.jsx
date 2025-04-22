import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Aishwarya.module.css';

const Aishwarya = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Aishwarya</h1>
        <p>This is the profile page for Aishwarya.</p>
      </div>
      <Footer />
    </>
  );
};

export default Aishwarya;
