import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import { IFullCountry } from "../../types";
import './CountryInfo.css'; 

interface Props {
  shortName: string;
}

const CountryInfo = ({ shortName }: Props) => {
  const [country, setCountry] = useState<IFullCountry | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCountry = async (name: string) => {
      try {
        const response = await fetch(`${BASE_URL}/alpha/${name}`);
    
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data: IFullCountry = await response.json();
        

        console.log("Received country data:", data);
        
        setCountry(data);
      } catch (error) {
        setError("Ошибка загрузки данных");
        console.error("Ошибка запроса:", error);
      }
    };
    
    

    if (shortName) {
      getCountry(shortName);
    }
  }, [shortName]);

  return (
    <div className="country-info">
      {error && <p className="error-message">{error}</p>}
      {country ? (
        <div className="country-details">
          <h2 className="country-name">{country.name?.official || "Неизвестно"}</h2>
          <p className="country-capital">Столица: {Array.isArray(country.capital) ? country.capital.join(", ") : country.capital || "Неизвестно"}</p>
          <p className="country-population">Население: {country.population.toLocaleString()}</p>
          <p className="country-region">Регион: {country.region}</p>
          <img src={country.flags?.png} alt={`Флаг ${country.name?.official || "страны"}`} className="country-flag" />
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default CountryInfo;
