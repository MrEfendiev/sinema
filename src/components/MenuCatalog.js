import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './General.css';

const MenuCatalog = () =>  {

    const [active, setActive] = useState(false)

    const [activeToo, setActiveToo] = useState(false)

    // const arrItem = [ 
    //     {
    //       id: 1, 
    //       title: 'Фильмы',
    //       list: ['Артхаус, Боевики, Вестерны, Военные, Детективы']
    //     },
    //     {
    //       id: 2, 
    //       title: 'Сериалы',
    //       list: ['Биография, Боевики, Вестерны, Военные, Детективы']
    //     },
    //     {
    //       id: 3, 
    //       title: 'Мультфильмы',
    //       list: ['Боевик, История, Комедия, Криминальные, Фантези']
    //     }
    //   ]
      

  return (
    <div className='MenuCatalog'>
        <div className='Home__Nav-Link'>
            <Link className='Home__Nav-logo' to="/">CINEMA</Link>
            <Link className='Home__Nav-item' to="/">Мой CINEMA</Link>
            <Link className='Home__Nav-item' to="/">Что нового</Link>
            <Link className='MenuCatalog__Link-Active' onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)} to='/'>
                <Link className='Home__Nav-item Home__Nav-item-active' to='/'>Фильмы</Link>
            {
                    active && <ul className='Home__Nav-Ative-List'>
                      <div className='Home__Nav-Ative-List-flex'>
                        <div className='Home__Nav-Ative-block'>
                          <h2 className='Nav-Ative-Link-title' to='/'>Жанры</h2>
                            <div className='Nav-Ative-block-flex'>
                              <div>
                                <Link className='Home__Nav-Ative-Link' to='/'>Криминальные</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Комедии</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Мелодрамы</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Мистические</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>По комиксам</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Приключения</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Спорт</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Триллеры</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Ужасы</Link>
                              </div>
                              <div>
                                <Link className='Home__Nav-Ative-Link' to='/'>Боевики</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Вестерн</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Детективы</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Военные</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Для всей семьи</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Для детей</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Драмы</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Исторические</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Драмы</Link>
                              </div>
                            </div>
                        </div>
                        <div className='Home__Nav-Ative-block-too'>
                        <h2 className='Nav-Ative-Link-title' to='/'>Страны</h2>
                            <div className='Nav-Ative-block-flex'>
                              <div>
                                <Link className='Home__Nav-Ative-Link' to='/'>Криминальные</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Комедии</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Мелодрамы</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Мистические</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>По комиксам</Link>

                                <Link className='Nav-Ative-Link-title' to='/'>Годы</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Сериалы 2022 года</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Сериалы 2021 года</Link>
                                <Link className='Home__Nav-Ative-Link' to='/'>Сериалы 2020 года</Link>
                              </div>
                            </div>
                        </div>

                      </div>
                    </ul>
            }
                
            </Link>
             
            <Link onMouseLeave={() => setActiveToo(false)} onMouseEnter={() => setActiveToo(true)} className='Home__Nav-item Home__Nav-item-active' to="/">
             Сериалы

              {
                activeToo && <ul className='Home__Nav-Ative-List'>
                <div className='Home__Nav-Ative-List-flex'>
                  <div className='Home__Nav-Ative-block'>
                    <h2 className='Nav-Ative-Link-title' to='/'>Жанры</h2>
                      <div className='Nav-Ative-block-flex'>
                        <div>
                          <Link className='Home__Nav-Ative-Link' to='/'>Биография</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Боевики</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Военные</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Детективы</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Для всей семьи</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Документальные</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Дорамы</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Драмы</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Исторические</Link>
                        </div>
                        <div>
                          <Link className='Home__Nav-Ative-Link' to='/'>Криминальные</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Медицинские</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Мелодрамы</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Мистические</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Романтические</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Приключения</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Телешоу</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Триллеры</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Ужасы</Link>

                        </div>
                      </div>
                  </div>
                  <div className='Home__Nav-Ative-block-too'>
                  <h2 className='Nav-Ative-Link-title' to='/'>Страны</h2>
                      <div className='Nav-Ative-block-flex'>
                        <div>
                          <Link className='Home__Nav-Ative-Link' to='/'>Криминальные</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Комедии</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Мелодрамы</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Мистические</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>По комиксам</Link>

                          <Link className='Nav-Ative-Link-title' to='/'>Годы</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Сериалы 2022 года</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Сериалы 2021 года</Link>
                          <Link className='Home__Nav-Ative-Link' to='/'>Сериалы 2020 года</Link>
                        </div>
                      </div>
                  </div>

                </div>
              </ul>
              }
              
            </Link>
            <Link onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)} className='Home__Nav-item' to="/">Мультфильмы</Link>
            <Link onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)} className='Home__Nav-item' to="/">TV+</Link>
        </div>
    </div>
  )
}

export default MenuCatalog