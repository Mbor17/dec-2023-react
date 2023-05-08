import React from 'react';
import {useForm} from "react-hook-form";
import car from "../car/Car";

const CarForm = () => {
    const {register,handleSubmit,reset,formState:{errors,isValid}} = useForm();
    
    const save = (car) => {
        console.log(car);
    }
    return (
        <form onSubmit={handleSubmit(save)}>
               <input type='text'placeholder={'brand'}{...register('brand',{pattern:
                       {value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                       message:'Бренд має складатись тільки з літер мін 1 макс 20 літер'
               }
               })}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
               <input type='text'placeholder={'price'}{...register('price',{valueAsNumber:true}) }/>
               <input type='text'placeholder={'year'}{...register('year',{valueAsNumber:true}) }/>
            <button>Save</button>
        </form>
    );
};

export default CarForm;