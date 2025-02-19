
export interface IShortCountry {
  name: string,
  alpha3Code: string,
  independent: boolean
}

export interface IFullCountry {
    name: {
      common: string;
      official: string;
    };
    capital?: string | string[];
    population: number;
    region: string;
    flags: {
      png: string;
    };
  }
  

  
  


export interface IFullCountryUpdated extends IFullCountry{
    bordersFull:IShortCountry[]
}




