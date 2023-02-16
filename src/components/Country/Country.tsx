import { Card, CardContent } from "@mui/material";

import { ICard } from "../../App";
import CountryFooter from "./CountryFooter";
import CountryHeader from "./CountryHeader";


const Country = ({ card}:{ card: ICard }): JSX.Element => {
  return (
    <Card sx={{ marginTop: 1 }} variant="outlined">
      <CardContent>
       <CountryHeader card={card}/>
        <CountryFooter card={card}/> 
      </CardContent>
    </Card>
  );
};

export default Country;
