import React from 'react';
import styles from './ThreePrinciplesOfDiscipleship.module.css'; // Создадим этот файл для стилей
import Container from "../../../components/Container/Container.jsx";
import imgMain from "/img/success.png"
import Main from "../../../components/Main/Main";


const ThreePrinciplesOfDiscipleship = () => {
  return (
    <>
        <Main img={imgMain} title={`3 "П" ученичества`} description={"призвание, план, подготовка"}/>
        <Container>
        </Container>
    </>
  );
};

export default ThreePrinciplesOfDiscipleship;