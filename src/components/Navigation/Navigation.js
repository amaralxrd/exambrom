import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {

    const [json, setJson] = useState({});

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/left_widget`)
            .then(res => res.json())
            .then(data => setJson(data))
    }, []);


    return (
        <div className='text-xl my-8'>
            <ul className='flex my-auto flex-col'>
                <li className='text-center text-3xl'><Link to="/">О нас</Link></li>
                <li className='text-center text-3xl'><Link to="/ads">Объявления</Link></li>
            </ul>
            <div className='my-4 text-2xl w-270px'>Количество объявлений<br/> в базе Brom</div>
            <ul>
                <li>Автомобили: {json.cars}</li>
                <li>Квартиры: {json.apartments}</li>
            </ul>
        </div>
    );
};

export default Navigation;