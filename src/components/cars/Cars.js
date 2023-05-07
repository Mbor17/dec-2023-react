import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../car/Car";

const Cars = () => {
    const  [cars,setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
        },[]
    )
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;