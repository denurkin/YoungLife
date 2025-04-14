import React from "react";
import Jesus from "../../assets/jesus-teaching.svg"
import Container from "../../components/Container/Container";
import styles from './Home.module.css';
import Navbar from "../../components/Navbar/Navbar";



function Home() {
  return (
    <>
      <Navbar/>
      <main className={styles.main}>
        <Container>
          <img src={Jesus} className={styles.jesusImg}/>
        </Container>
      </main>
    </>
  )
}

export default Home;