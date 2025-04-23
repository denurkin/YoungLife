import React from 'react';
import styles from './NewBirth.module.css'; // Создадим этот файл для стилей
import Container from "../../../components/Container/Container.jsx";
import imgMain from "/img/road.png"
import Main from "../../../components/Main/Main";


const NewBirth = () => {
  return (
    <>
        <Main img={imgMain} title={"Новое рождение и новая жизнь"} description={"как евангелизация и наставничество пересекаются"}/>
        <Container>
        </Container>
    </>
  );
};

export default NewBirth;