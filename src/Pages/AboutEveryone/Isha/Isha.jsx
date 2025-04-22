import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Isha.module.css';

const Isha = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Isha</h1>
        <p>This is the profile page for Isha.</p>
      </div>
      <Footer />
    </>
  );
};

export default Isha;
