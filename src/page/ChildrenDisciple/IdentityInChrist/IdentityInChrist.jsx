import React from 'react';
import styles from './IdentityInChrist.module.css'; // Создадим этот файл для стилей
import Container from "../../../components/Container/Container.jsx";
import imgMain from "/img/star.png"
import Main from "../../../components/Main/Main";



const IdentityInChrist = () => {  
  return (
    <>
        <Main img={imgMain} title={"Идентичность и ценности"} description={"почему мы делаем то, что делаем"}/>
        <Container>
        </Container>
    </>
  );
};

export default IdentityInChrist;