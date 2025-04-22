import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Shrut.module.css';

const Shrut = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Shrut</h1>
        <p>This is the profile page for Shrut.</p>
      </div>
      <Footer />
    </>
  );
};

export default Shrut;
