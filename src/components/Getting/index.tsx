import React from 'react';
import first from '../../img/first.svg'
import second from '../../img/second.svg'
import thirty from '../../img/thirty.svg'

const Getting = () => {
    return (
        <div id='getting'>
            <div className="container">
                <h1 className=' text-[30px] text-center py-10'>Получите профессию прямо сейчас</h1>
                <div className='flex items-center justify-around'>
                    <div className='flex flex-col items-center '>
                        <img src={first} alt="img"/>
                        <h1 className='text-center  text-[] my-4 text-3xl'>Только практические <br/>
                            навыки в работе</h1>
                        <p  className=' text-center text-xs '>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque
                            accumsan <br/>
                            amet tortor. Velit, volutpat egestas fringilla mi <br/>porttitor tempus. Placerat dui.</p>
                    </div> <div className='flex flex-col items-center '>
                        <img src={second} alt="img"/>
                        <h1 className='text-center  text-[] my-4 text-3xl'>Только практические <br/>
                            навыки в работе</h1>
                        <p  className=' text-center text-xs '>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque
                            accumsan <br/>
                            amet tortor. Velit, volutpat egestas fringilla mi <br/>porttitor tempus. Placerat dui.</p>
                    </div> <div className='flex flex-col items-center '>
                        <img src={thirty} alt="img"/>
                        <h1 className='text-center  text-[] my-4 text-3xl'>Только практические <br/>
                            навыки в работе</h1>
                        <p  className=' text-center text-xs '>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Netus eget velit quisque
                            accumsan <br/>
                            amet tortor. Velit, volutpat egestas fringilla mi <br/>porttitor tempus. Placerat dui.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Getting;