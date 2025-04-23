import React from 'react';
import styles from './TypesOfMentorship.module.css'; // Создадим этот файл для стилей
import Container from "../../../components/Container/Container.jsx";
import imgMain from "/img/cube.png"
import Main from "../../../components/Main/Main";


const TypesOfMentorship = () => {
  return (
    <>
        <Main img={imgMain} title={"Два вида наставничества"} description={"естественное и планируемое наставничество"}/>
        <Container>
        </Container>
    </>
  );
};

export default TypesOfMentorship;