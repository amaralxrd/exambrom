import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='h-28 flex justify-between bg-blue'>
            <div className='text-6xl my-auto mx-32'><Link to='/'>Brom</Link></div>
            <div className='my-auto mx-32'>Доска объявлений</div>
        </div>
    );
};

export default Header;