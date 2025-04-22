import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Shubhra.module.css';

const Shubhra = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Shubhra</h1>
        <p>This is the profile page for Shubhra.</p>
      </div>
      <Footer />
    </>
  );
};

export default Shubhra;
