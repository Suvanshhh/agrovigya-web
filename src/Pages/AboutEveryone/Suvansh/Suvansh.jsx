import React from 'react';
import Navbar from '../../../components/Navbar/navbar';
import Footer from '../../../components/Footer/footer';
import styles from './Suvansh.module.css';

const Suvansh = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1>Suvansh</h1>
        <p>This is the profile page for Suvansh.</p>
      </div>
      <Footer />
    </>
  );
};

export default Suvansh;
