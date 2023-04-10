import React from 'react';
import logo from '../../img/logo.svg'

interface IMode {
    mode: boolean
    setMode: (value:boolean) => void
}
const Header = ({mode, setMode}:IMode) => {
    return (
        <div id="header">
            <div className='flex items-center justify-between container py-2 fixed left-0 right-0'>
                <div>
                    <img src={logo} alt="img"/>
                </div>
                <nav className='flex'>
                    <a className='mx-4' href="#">Главная</a>
                    <a className='mx-4' href="#">Курсы</a>
                    <a className='mx-4' href="#">Расписание</a>
                    <a className='mx-4' href="#">Преподаватели</a>
                    <a className='mx-4' href="#">Рассылка</a>
                    <a className='mx-4' href="#">Контакты</a>
                </nav>
                <button onClick={()=>setMode(!mode)} className='bg-400 py-2 px-7 bg-sky-600 rounded-[20px] text-white'>Зайти
                    в кабинет
                </button>
            </div>
        </div>
    );
};

export default Header;