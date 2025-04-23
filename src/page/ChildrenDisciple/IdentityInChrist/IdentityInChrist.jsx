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
        <div className={styles.container}>
          <div className={styles.section}>
              {/* Ученичество */}
              <div className={styles.discipleshipSection}>
                  <h2 className={styles.sectionTitle}>УЧЕНИЧЕСТВО</h2>
                  
                  <h3 className={styles.subtitle}>Какие вещи должны описывать нас в ученичестве:</h3>
                  <ul className={styles.featuresList}>
                      <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>❤️</span>
                          <strong>Любовь к Иисусу и другим</strong> (поклонение и служение)
                      </li>
                      <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>📖</span>
                          <strong>Знание Иисуса и об Иисусе</strong> (духовный и интеллектуальный рост)
                      </li>
                      <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>👣</span>
                          <strong>Жизнь по примеру Иисуса и для Иисуса</strong> (подражание и призвание)
                      </li>
                  </ul>
                  
                  <h3 className={styles.subtitle}>Наши ценности в ученичестве:</h3>
                  
                  <div className={styles.valueCard}>
                      <div className={styles.valueHeader}>
                          <span className={styles.valueIcon}>🧠</span>
                          <h4 className={styles.valueTitle}>Голова (обновленный разум)</h4>
                      </div>
                      <p className={styles.valueText}>
                          "Не приспосабливайтесь к образу жизни этого мира, но преображайтесь, обновляя ваш разум, чтобы
                          вы сами могли постигать волю Божью, благую, угодную и совершенную." <em>(Рим. 12:2)</em>
                      </p>
                  </div>
                  
                  <div className={styles.valueCard}>
                      <div className={styles.valueHeader}>
                          <span className={styles.valueIcon}>💖</span>
                          <h4 className={styles.valueTitle}>Сердце (крепкая вера)</h4>
                      </div>
                      <p className={styles.valueText}>
                          "Поэтому, раз вы приняли Господа Иисуса Христа, то и живите в Нем, укореняйтесь и растите в Нем.
                          Пусть вера, которой вы были научены, набирает в вас силу, и пусть благодарность переполняет
                          вас." <em>(Кол. 2:6-7)</em>
                      </p>
                  </div>
                  
                  <div className={styles.valueCard}>
                      <div className={styles.valueHeader}>
                          <span className={styles.valueIcon}>✋</span>
                          <h4 className={styles.valueTitle}>Руки (смиренное послушание)</h4>
                      </div>
                      <p className={styles.valueText}>
                          "Мы можем быть уверены, что знаем Его, если соблюдаем Его повеления. Если кто-то говорит: «Я
                          знаю Его», но не соблюдает Его повелений, тот лжец, и истины в нём нет. Но если человек
                          послушен Его слову, тогда любовь Божья действительно достигла в нём своей полноты; это и
                          показывает, что мы пребываем в Нем. Кто говорит, что он в Нем, тот должен и жить так, как жил Он."
                          <em>(1Ин. 2:3-6)</em>
                      </p>
                  </div>
              </div>
              
              {/* Наставничество */}
              <div className={styles.mentorshipSection}>
                  <h2 className={styles.sectionTitle}>НАСТАВНИЧЕСТВО</h2>
                  
                  <h3 className={styles.subtitle}>Какие вещи должны описывать нас в наставничестве:</h3>
                  <ul className={styles.featuresList}>
                      <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>👥</span>
                          <strong>Отношения</strong> (мы вкладываем время и силы, чтобы по-настоящему узнать тех, кого наставляем)
                      </li>
                      <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎯</span>
                          <strong>Намерения</strong> (мы вкладываем в других осмысленно и с пониманием)
                      </li>
                      <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🤝</span>
                          <strong>Верность</strong> (мы находимся рядом с теми, кого наставляем)
                      </li>
                      <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🔄</span>
                          <strong>Обновление</strong> (мы направляем других к преображенной жизни, где они становятся более похожими на Христа)
                      </li>
                  </ul>
                  
                  <h3 className={styles.subtitle}>Наши ценности в наставничестве:</h3>
                  
                  <div className={styles.valueGrid}>
                      <div className={styles.gridItem}>
                          <div className={styles.valueHeader}>
                              <span className={styles.valueIcon}>❤️</span>
                              <h4 className={styles.valueTitle}>Близость важнее программы</h4>
                          </div>
                          <p className={styles.valueText}>
                              Люди и отношения всегда значат больше чем мероприятия
                          </p>
                      </div>
                      
                      <div className={styles.gridItem}>
                          <div className={styles.valueHeader}>
                              <span className={styles.valueIcon}>👂</span>
                              <h4 className={styles.valueTitle}>Слышание важнее советов</h4>
                          </div>
                          <p className={styles.valueText}>
                              Мы учим, но это должно происходить в контексте внимательного слушания и взаимного обсуждения
                          </p>
                      </div>
                      
                      <div className={styles.gridItem}>
                          <div className={styles.valueHeader}>
                              <span className={styles.valueIcon}>🌟</span>
                              <h4 className={styles.valueTitle}>Несколько важнее множества</h4>
                          </div>
                          <p className={styles.valueText}>
                              Мы, люди, ограничены в своих силах, поэтому можем глубоко погрузиться только в небольшое количество отношений; много не значит глубоко
                          </p>
                      </div>
                      
                      <div className={styles.gridItem}>
                          <div className={styles.valueHeader}>
                              <span className={styles.valueIcon}>🙏</span>
                              <h4 className={styles.valueTitle}>Знать Бога важнее чем знать все ответы</h4>
                          </div>
                          <p className={styles.valueText}>
                              Мы никогда не будем знать все ответы, хотя и должны узнавать всё больше и больше соответственно нашему росту во Христе; гораздо важнее лично, хорошо и по-настоящему знать Бога
                          </p>
                      </div>
                  </div>
                  <img className={styles.identichostImg} src="/img/identichostImg.png" alt="" />
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};

export default IdentityInChrist;