import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Shivam.module.css';

const Shivam = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Shivam</h1>
        <p>This is the profile page for Shivam.</p>
      </div>
      <Footer />
    </>
  );
};

export default Shivam;
