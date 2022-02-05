import React from 'react';
import Navigation from '../Navigation/Navigation'
import left from '../../assets/left_widget_img.jpg'
const Widget = () => {
    return (
        <div className='bg-sky'>
            <Navigation />
            <img src={left} alt="widget"/>
        </div>
    );
};

export default Widget;