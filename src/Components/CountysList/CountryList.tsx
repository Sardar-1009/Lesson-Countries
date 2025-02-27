import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import {IShortCountry} from '../../types.ts';

interface Props {
  countries: IShortCountry[];
  onSelectedCountry:(name:string) => void
}

export default function CountriesList({countries,onSelectedCountry}: Props) {
  const DrawerList = (
    <Box sx={{width: 350}} role="presentation">
      <List>
        {countries.map((country) => (
          <p key={country.alpha3Code} onClick={()=> onSelectedCountry(country.alpha3Code)}>
            {country.name}
          </p>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer open>
      {DrawerList}
    </Drawer>
  );
}