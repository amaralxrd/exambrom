import React, { useState } from 'react';

const Form = ({ jsonAds, setJsonAds }) => {

    const [json, setJson] = useState({ fields: { city: { values: [] } } });

    const [toggle, setToggle] = useState('car');

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/sales/form`)
            .then(res => res.json())
            .then(data => setJson(data))
    }, []);

    const post = (e) => {
        e.preventDefault();
        const target = e.target;
        let rand = Math.floor(Math.random() * 100000)
        let flag = false;
        for (let i = 0; i < 8; i++)
            if (target[i].value === '') flag = true;
        if (!flag) {
            let formData = new FormData();
            formData.append('address', target[0].value);
            formData.append('city', target[1].value);
            formData.append('id', rand);
            formData.append('phone', target[2].value);
            formData.append('price', target[3].value);
            formData.append('type', toggle);
            if (toggle === 'car') {
                formData.append('car_type', target[4].value);
                formData.append('engine_power', target[5].value);
                formData.append('engine_volume', target[6].value);
                formData.append('model', target[7].value);
            }
            else {
                formData.append('rooms', target[4].value);
                formData.append('square', target[5].value);
            }
            fetch(
                `https://demo-api.vsdev.space/api/brom/sales`,
                {
                    method: "POST",
                    headers: {
                        "Accept": 'application/json',
                    },
                    body: formData
                },
            )
                .then(res => res.json())
                .then(res => setJson([...json, {
                    adress: target[0].value,
                    car_type: target[4].value,
                    city: target[1].value,
                    engine_power: target[5].value,
                    engine_volume: target[6].value,
                    id: rand,
                    model: target[7].value,
                    phone: target[2].value,
                    price: target[3].value,
                    type: toggle,
                }]))
        }
    }

    return (
        <form onSubmit={(e) => post(e)}>
            <div className='flex justify-between'>

                <div className="flex flex-col justify-between">
                    <div className='flex flex-col justify-between w-250px h-250px ml-32'>
                        <input className='shadow-md rounded-lg h-40px' placeholder='Цена' />
                        <select className='shadow-md rounded-lg h-40px' placeholder='Город'>
                            {json.fields.city.values.map(x => <option key={x} value={x}>{x}</option>)}
                        </select>
                        <input className='shadow-md rounded-lg h-40px' placeholder='Адрес' />
                        <input className='shadow-md rounded-lg h-40px' placeholder='Телефон' />
                    </div>
                    <div className='w-250px ml-32 mt-8'>
                        {toggle === 'car' ?
                            <div className="flex flex-col justify-between h-250px">
                                <div>Добавление машины</div>
                                <input className='shadow-md rounded-lg h-40px' placeholder='Марка модель' />
                                <select className='shadow-md rounded-lg h-40px'>
                                    <option value="Седан">Седан</option>
                                    <option value="Внедорожник">Внедорожник</option>
                                    <option value="Хетчбек">Хетчбек</option>
                                    <option value="Кабриолет">Кабриолет</option>
                                </select>
                                <input className='shadow-md rounded-lg h-40px' placeholder='Мощность двигателя' />
                                <input className='shadow-md rounded-lg h-40px' placeholder='Громкость двигателя' />
                            </div>
                            :
                            <div className="flex flex-col h-250px">
                                <div>Добавление квартиры</div>
                                <input className='shadow-md rounded-lg h-40px my-4' placeholder='Количество комнат' />
                                <input className='shadow-md rounded-lg h-40px' placeholder='Площадь' />
                            </div>
                        }
                    </div>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='flex flex-col jusitfy-between text-center'>
                        <div onClick={() => setToggle('car')} className='cursor-pointer h-50px w-100px shadow-md rounded-lg'>Добавление<br /> машины</div>
                        <div onClick={() => setToggle('apartaments')} className=' my-8 cursor-pointer h-50px w-100px shadow-md rounded-lg'>Добавление<br /> квартиры</div>
                        <div className='flex jusitfy-center w-full'>
                            <button className='shadow-md border-black rounded-lg mx-auto w-100px h-80px' type="submit">Отправить</button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default Form;