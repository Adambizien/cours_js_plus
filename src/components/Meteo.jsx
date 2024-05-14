import React, { useEffect, useState } from 'react';

export default function Meteo() {
    const [meteo, setMeteo] = useState(null);
    const [ville, setVille] = useState('');
    const [inputVille, setInputVille] = useState('');

    const handleInputChange = (e) => {
        setInputVille(e.target.value);
    };

    const handleSubmit = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=4603c779c6814655a7a71703241405&q=${inputVille}&aqi=yes`)
            .then((res) => res.json())
            .then((data) => {
                setMeteo(data.current);
                setVille(data.location);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    return (
        <>
            <input type="text" value={inputVille} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Chercher</button>
            {meteo && (
                <div>
                    <h2>Météo à {ville.name}</h2>
                    <p>Température actuelle : {meteo.temp_c}°C</p>
                    <p>Condition : {meteo.condition.text}</p>
                </div>
            )}
        </>
    );
}
