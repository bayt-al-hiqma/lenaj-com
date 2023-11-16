import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import styles from '../styles/globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
        <Header />

        <main className={styles.main}>
            <h1 className={styles.title}>Welcome to LENAJ</h1>
            <p className={styles.description}>Site Under Construction...</p>
            <ContactInfo />
        </main>

        <Footer />
    </div>
  );
}