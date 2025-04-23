import React from 'react';
import styles from './LivePoklonenie.module.css'; // Создадим этот файл для стилей
import Container from "../../../components/Container/Container.jsx";
import imgMain from "/img/face.png"
import Main from "../../../components/Main/Main.jsx";



const LivePoklonenie = () => {  
  return (
    <>
        <Main img={imgMain} title={"Жизнь, подражание, поклонение"} description={"рассказывать Евангелие полностью"}/>
        <Container>
        </Container>
    </>
  );
};

export default LivePoklonenie;