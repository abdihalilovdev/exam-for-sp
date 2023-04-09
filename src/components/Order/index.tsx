import React from 'react';

const Order = () => {
    return (
        <div className='bg-black text-white'>
            <div className='container flex justify-evenly items-center py-5'>
                <div>
                    <button className='bg-red-500 py-2 px-6 rounded-[14px]'>Заказать курс</button>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <p className='text-[14px]'>Заказать курс</p>
                        <h6 className='text-[18px]'>200</h6>
                    </div>
                    <div className='flex justify-between w-[14rem]'>
                        <p className='text-[14px]'>Успешно закончили курс:</p>
                        <h6 className='text-[18px]'>190</h6>
                    </div>
                </div>
                <div>
                    <div className='flex items-center'>
                        <p className='text-[12px]'>Заработано учениками:</p>
                        <h6 className='text-[16px] ml-[40px]'>400 000₽</h6>
                    </div>
                    <div className='flex'>
                        <div className="line w-[200px] h-[3px] bg-red-500"></div>
                        <div className="line2 w-[130px] h-[3px] bg-white"></div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-[12px]'>0</p>
                        <p className='text-[12px]'>1 000 000₽</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;