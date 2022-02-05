import React, { useState } from 'react';
import home from '../../assets/home_page_img.jpg'
const Main = () => {

    const [json, setJson] = useState({ text: '' });

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/about_page`)
            .then(res => res.json())
            .then(data => setJson(data))

    }, []);

    return (
        <div className='flex mx-32 justify-between'>
            <div className='flex'>
                <div className='w-500px h-500px'>{json.text}</div>
                <div className='w-500px h-500px mx-20'><img src={home} alt="home" /></div>
            </div>
        </div>
    );
};

export default Main;