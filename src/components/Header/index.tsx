import React from 'react';
import logo from '../../img/logo.svg'

// interface UMode {
//     mode:boolean
//     setMode:boolean
// }

const Header = ({mode,setMode}:any) => {
    return (
    <div id="header">
        <div className='flex items-center justify-between container py-2'>
            <div>
                <img src={logo} alt=""/>
            </div>
            <nav className='flex'>
                <a className='mx-4 text-white/90' href="#">Главная</a>
                <a className='mx-4 text-white/90' href="#">Курсы</a>
                <a className='mx-4 text-white/90' href="#">Расписание</a>
                <a className='mx-4 text-white/90' href="#">Преподаватели</a>
                <a className='mx-4 text-white/90' href="#">Рассылка</a>
                <a className='mx-4 text-white/90' href="#">Контакты</a>
            </nav>
            <button onClick={() => setMode(true)} className='bg-400 py-2 px-7 text-white bg-sky-600 rounded-[20px]'>Зайти в кабинет</button>
        </div>
    </div>
    );
};

export default Header;