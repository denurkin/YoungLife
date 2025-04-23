import React from 'react';
import styles from './BibleStudy.module.css'; // Создадим этот файл для стилей
import Container from "../../../components/Container/Container.jsx";
import imgMain from "/img/bible.png"
import Main from "../../../components/Main/Main";


const BibleStudy = () => {
  return (
    <>
        <Main img={imgMain} title={"Изучать Библию целиком"} description={"чтобы видеть полную историю"}/>
        <Container>
        </Container>
    </>
  );
};

export default BibleStudy;