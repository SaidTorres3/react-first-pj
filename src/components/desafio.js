import React, { useState } from 'react';

const Desafio = () => {
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('blue');
    const [edad, setEdad] = useState('');

    const [datos, setDatos] = useState([]);

    const handleClick = () => {

        if(!nombre.trim() || !edad.trim){
            alert("Ingrese todos los datos para aplicar.");
            return;
        }
        
        if(color==="aleatorio"){
            aleatorizador();
            return;
        }

        setDatos([...datos, {nombre: nombre, color: color, edad: edad}]);
        setNombre('');
        setEdad('');
        setColor('blue');
    }

    const aleatorizador = () => {
        let numeroAleatorio = Math.round(Math.random()*7);
        let resultado;
            switch(numeroAleatorio){
                case 0:
                    resultado = "blue";
                    break;
                case 1:
                    resultado = "red";
                    break;
                case 2:
                    resultado = "yellow";
                    break;
                case 3:
                    resultado = "green";
                    break;
                case 4:
                    resultado = "orange";
                    break;
                case 5:
                    resultado = "purple";
                    break;
                case 6:
                    resultado = "pink";
                    break;
                case 7:
                    resultado = "white";
                    break;
                default: resultado = "blue";
            }

            setDatos([...datos, {nombre: nombre, color: resultado, edad: edad}]);
            setNombre('');
            setEdad('');
            setColor('blue');
    }

    return (
        <div>
            <p>Ingresa tu nombre.</p>
            <input id="nombre" type="text" id="nombre" placeholder="Ingresa tu nombre"
                value={nombre} onChange={event => setNombre(event.target.value)} />

            <p>Ingresa tu edad.</p>
            <input id="edad" type="text" id="edad" placeholder="Ingresa tu edad"
                value={edad} onChange={event => setEdad(event.target.value)} />

            <p>Elige el color que quieres.</p>
            <select name="color" id="selector" value={color} onChange={event => setColor(event.target.value)}>
                <option value="blue">Azul</option>
                <option value="red">Rojo</option>
                <option value="yellow">Amarillo</option>
                <option value="green">Verde</option>
                <option value="orange">Naranja</option>
                <option value="purple">Morado</option>
                <option value="pink">Rosa</option>
                <option value="white">Blanco</option>
                <option value="aleatorio">Aleatorio</option>
            </select>
            <br></br>
            <br></br>

            <button type="button" onClick={handleClick}>
                Aplicar
            </button>

            <ul>
                {datos.map((item, i) => <li style={{color: item.color}} key={i}>{item.nombre} tiene {item.edad} años de edad.</li>)}
            </ul>

        </div>
    );
}

export default Desafio;