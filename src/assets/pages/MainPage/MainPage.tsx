import { Link } from "react-router";
import Header from "../../components/Headers/Header";

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';

import me from './image/Me.png'
import bg from './image/bg.png'

import test from './image/test.jpg'
import reactIco from './image/ico_tehnology/react-svgrepo-com.svg'
import JSIco from './image/ico_tehnology/javascript-16-svgrepo-com.svg'
import TSIco from './image/ico_tehnology/typescript-svgrepo-com (1).svg'


import './MainPage.scss'
import SubMenu from "../../components/SubMenu/SubMenu";


const MainPage = () => {
    

    let text = 'Обо мне'
    return ( 
        <div className="main__page">
            <Header text={`${text}`}></Header>
            <SubMenu></SubMenu>
            <div className="box__content">
                <div className="col__content">
                    <div className="portret__box">
                        <div className="img">
                            <img src={me} alt="" />
                        </div>
                        <p className="portret__text">Frontend-разработчик</p>
                    </div>
                    <div className="contact__box">
                        <ul className="contact__list">
                            <li className="contact__item">
                                <p>Telegram: <br/><span><a href="https://t.me/step_sm">Stepan</a></span></p>
                            </li>
                            <li className="contact__item">
                                <p>Git: <br/><span><a href="https://github.com/SmStephan00?tab=repositories">SmStephan00</a></span></p>
                            </li>
                            <li className="contact__item">
                                <p>Gmail: <br/><span><Link to='https://mail.google.com/mail/?view=cm&fs=1&to=smagin.stepan@gmail.com' >smagin.stepan</Link></span></p>
                            </li>
                        </ul>
                        
                    </div>
                    <ul className="hard__skill">
                        <li className="hard__skill__item">
                            <h3>Инструменты</h3>
                            <p><span>Тестирование:</span> Jest, React Testing Library
                               <br /><span>Сборка и контейнеризация:</span> Webpack, Docker
                               <br /><span>Версионный контроль: </span>Git
                               <br /><span>CI/CD:</span> GitLab CI/CD (ускорил деплой в 2 раза)
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col__content">
                    <ul className="personal__info__list">
                        <li className="personal__info__item">
                            <h2>Личная информация</h2>
                        </li>
                        <li className="personal__info__item">
                            <p>Гражданство: <span>Россия</span></p>
                        </li>
                        <li className="personal__info__item">
                            <p>Проживание: <span> г.Новокузнецк(МСК+4)</span></p>
                        </li>
                        <li className="personal__info__item">
                            <p>Возраст: <span>25 лет</span></p>
                        </li>
                        <li className="personal__info__item">
                            <p>Общий опыт разработки: <span>3 года</span></p>
                        </li>
                    </ul>
                    <ul className="hard__skill">
                        <li  className="hard__skill__item">
                            <div className="bg">
                                <img src={bg} alt="" />
                                <h2>Хард скилы</h2>
                            </div>
                        </li>
                        <li className="hard__skill__item">
                            <h3>Frontend:</h3>
                            <p>
                                <span>Языки:</span> TypeScript, JavaScript (ES6+) 
                                <br /><span>Фреймворки / Библиотеки:</span> React, Next.js, React Native 
                                <br /> <span>Управление состоянием:</span> Redux Toolkit, MobX 
                                <br /><span>Стилизация:</span> HTML5, CSS3, SASS/SCSS, Tailwind</p>
                        </li>
                        <li className="hard__skill__item">
                            <h3>API:</h3>
                            <p>
                                <span>Протоколы:</span>  REST API, GraphQL, WebSocket 
                                <br /><span>Базовый бэкенд:</span> Node.js, MongoDB, PostgreSQL
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col__content">
                    <div className="personal__description">
                        <h2>Кратко о себе</h2>
                        <p className="personal__text">
                            Привет! Я Степан, <span>Frontend-разработчик</span>. Более 3-х лет создаю сложные веб-приложения на <span>React</span> и <span>TypeScript</span> для Travel, Gaming и E-commerce. 
                        </p>
                    </div>
                    <ul className="soft__skill">
                        <li  className="soft__skill__item">
                            <h2>софт скилы</h2>
                        </li>
                        <li className="soft__skill__item">
                            <p>Коммуникация и взаимодействие</p>
                        </li>
                        <li className="soft__skill__item">
                            <p>Организационные навыки</p>
                        </li>
                        <li className="soft__skill__item">
                            <p>Критическое мышление</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="block__portfolio">
                <h1 className="title__block">
                    Портфолио
                </h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link to='/react'>
                            <h2 className="title__card">React примеры</h2>
                        <div className="box__preview">
                           
                            <div className="slider__preview__box">
                                <img className="preview__img" src={test} alt="" />
                            </div>
                        </div>
                        <p className="description__card">Просто примеры на React</p>
                        <div className="footer__card">
                            <div className="box__tehnolgy">
                                <img src={reactIco} alt="" />
                            </div>
                            <div className="level">
                                <p>Сложность</p>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/js'>
                            <h2 className="title__card">JS Примеры </h2>
                        <div className="box__preview">
                           
                            <div className="slider__preview__box">
                                <img className="preview__img" src={test} alt="" />
                            </div>
                        </div>
                        <p className="description__card">Просто примеры на ванильном js</p>
                        <div className="footer__card">
                            <div className="box__tehnolgy">
                              
                                <img src={JSIco} alt="" />
                                
                            </div>
                            <div className="level">
                                <p>Сложность</p>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/AiAsistent'>
                        <h2 className="title__card">Ai для обхода гео</h2>
                        <div className="box__preview">
                            <div className="slider__preview__box">
                                <img className="preview__img" src={test} alt="" />
                            </div>
                        </div>
                        <p className="description__card">Нужно было пользовать gemini gpt, Поэтому создал ai для которого не нужен ни vpn ни зарубежный аккаунт</p>
                        <div className="footer__card">
                            <div className="box__tehnolgy">
                                <img src={reactIco} alt="" />
                                <img src={JSIco} alt="" />
                                <img src={TSIco} alt="" />
                            </div>
                            <div className="level">
                                <p>Сложность</p>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 className="title__card">Пример</h2>
                        <div className="box__preview">
                           
                            <div className="slider__preview__box">
                                <img className="preview__img" src={test} alt="" />
                            </div>
                        </div>
                        <p className="description__card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at ipsum provident veritatis expedita iure quis natus sint aperiam fugit, ipsa dolorem maxime voluptatum et atque praesentium eum laboriosam assumenda!</p>
                        <div className="footer__card">
                            <div className="box__tehnolgy">
                                <img src={reactIco} alt="" />
                                <img src={JSIco} alt="" />
                                <img src={TSIco} alt="" />
                            </div>
                            <div className="level">
                                <p>Сложность</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2 className="title__card">Пример</h2>
                        <div className="box__preview">
                           
                            <div className="slider__preview__box">
                                <img className="preview__img" src={test} alt="" />
                            </div>
                        </div>
                        <p className="description__card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at ipsum provident veritatis expedita iure quis natus sint aperiam fugit, ipsa dolorem maxime voluptatum et atque praesentium eum laboriosam assumenda!</p>
                        <div className="footer__card">
                            <div className="box__tehnolgy">
                                <img src={reactIco} alt="" />
                                <img src={JSIco} alt="" />
                                <img src={TSIco} alt="" />
                            </div>
                            <div className="level">
                                <p>Сложность</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                
            </div>
        </div>
     );
}
 
export default MainPage;