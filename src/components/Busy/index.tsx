import React from 'react';
import dispatch from '../../img/dispatch.png'
import redsvg from '../../img/red-svg.svg'

const Busy = () => {
    return (
        <div id='busy'>
            <div className='container'>
                <div className=' flex items-center justify-evenly py-20'>
                    <img src={dispatch} alt=""/>
                    <div className=''>
                        <h1 className='text-white text-[26px]'>Чем мы занимаемся?</h1>
                        <p className='text-white my-6 text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Eget neque, dignissim et feugiat elit augue in <br/>
                            suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et
                            neque, <br/>
                            adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet
                            fringilla. Nunc <br/>
                            sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus,
                            cursus id <br/>
                            elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
                    </div>
                </div>

                <div className='ml-28 py-10'>
                    <div className='flex items-center'>
                        <img src={redsvg} alt=""/>
                        <h1 className='text-white text-[26px] mx-4'> Быстрый старт</h1>
                    </div>
                    <p className='text-align-start text-white my-5'>Больше 90% учеников прошли полный курс и смогли <br/>собрать свой
                        первый компьютер</p>
                </div>
            </div>
        </div>
    );
};

export default Busy;