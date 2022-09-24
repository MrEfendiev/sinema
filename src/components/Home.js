import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { RiAccountCircleFill } from 'react-icons/ri'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import './General.css';
import MenuCatalog from './MenuCatalog'



class Home extends React.Component {

  state = {
      isLoading: true
  };

  componentDidMount() {
      setTimeout(() => {this.setState({isLoading: false})}, 5000);
  }

  
   
  render() {

      const {isLoading} = this.state;
      return (
        <div>
          {isLoading ? <div className='Home__Loading'>
            <h1 className='Home__Loading-logo'>
              <span>C</span>
              <span>I</span>
              <span>N</span>
              <span>E</span>
              <span>M</span>
              <span>A</span>
            </h1>
            <h3 className='Home__Loading-text'>Представляет</h3>
          </div> : <div className='Home'>
<div className='Home__container Container'>
 <div className='Home__Nav'>
     <div className='Home_Nav-Link_Active'>
             <MenuCatalog />
     </div>
     <div className='Home__Nav-Button'>
         <div className='Home__Nav-btn'>
             <Link className='Home__Nav-btn-Link' to="/Main">Смотреть 14 дней бесплатно за 1р</Link>
         </div>
         <div className='Home__Nav-Search'>
             <div className='Home__Nav-Search-icon'>
               <BsSearch/>
               <p>Поиск</p>
             </div>
       
         </div>
         <div className='Home__Nav-Notifications'>
             <MdOutlineNotificationsActive/>
         </div>
         <div className='Home__Nav-Account'>
         <RiAccountCircleFill className='Nav-Account'/>
         </div>
     </div>
 </div>
   <div className='Home__title'>
       <h1>Сериалы смотреть онлайн</h1>
       <p>Многие современные сериалы по своей зрелищности и сюжетным перипетиям мало в чем уступают полнометражным фильмам. Они с первой серии захватывают ваше внимание и заставляют с большим нетерпением ожидать каждого</p>
   </div>
</div>
</div> } </div>
      ) 
  }
}

export default Home




