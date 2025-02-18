import { PropsOf } from "@emotion/react"
import { useEffect } from "react";
import {BASE_URL} from '../../constants';
import { IFullCountry } from "../../types";

interface Props{
    shortName:string;
}


const CountryInfo = ({shortName}:Props) =>{
 
useEffect(()=> {
    const getCountry = async (name:string) => {
        try {
          const response = await fetch(`${BASE_URL}/alpha/${name}`);


          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }
          const data: IFullCountry = await response.json();
          console.log(data)
        } catch (error) {
          console.error('Ошибка запроса:', error);
          return [];
        }
      };

      if(shortName) {
        getCountry(shortName)
      }
},[shortName])
   
    return (
    <div>helllo</div>
    )
}



export default CountryInfo