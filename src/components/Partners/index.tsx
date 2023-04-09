import React from 'react';
import LitRed from '../../img/red-two.svg'
import msi from '../../img/msi.svg'

const Partners = () => {
    return (
        <div id='partners'>
            <div className="container py-20">
                <div className='flex items-center'>
                    <img src={LitRed} alt=""/>
                    <h1 className='text-white text-3xl mx-8'>Партнеры - топовые бренды</h1>
                </div>
                <div className='pt-20'>
                    <div className='flex items-center my-4'>
                        <img className='mx-4' src={msi} alt=""/>
                        <img className='mx-4' src={msi} alt=""/>
                        <img className='mx-4' src={msi} alt=""/>
                        <img className='mx-4' src={msi} alt=""/>
                    </div>
                    <div className='flex items-center my-4'>
                        <img className='mx-4' src={msi} alt=""/>
                        <img className='mx-4' src={msi} alt=""/>
                        <img className='mx-4' src={msi} alt=""/>
                        <img className='mx-4' src={msi} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;