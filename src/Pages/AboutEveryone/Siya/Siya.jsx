import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Siya.module.css';

const Siya = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Siya</h1>
        <p>This is the profile page for Siya.</p>
      </div>
      <Footer />
    </>
  );
};

export default Siya;
