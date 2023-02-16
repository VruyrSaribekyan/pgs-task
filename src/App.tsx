import { useQuery } from "@apollo/client";
import { Box, Container, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import Country from "./components/Country/Country";

import { GET_COUNTRYES } from "./services/getCountryes";

export interface Language {
  name: string;
  native: string;
  rtl: boolean;
}

export interface Continent {
  name: string;
}

export interface ICard {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  languages: Language[];
  continent: Continent;
  emoji: string;
  states: any[];
}

interface IData {
  countries: ICard[];
}

function App() {
  const { data } = useQuery<IData>(GET_COUNTRYES);
  const [searchItem, setSearchItem] = useState<string>("");

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      maxWidth="sm"
    >
      <Box
        sx={{
          width: 350,
          height: 300,
          paddingTop: 1
        }}
      >
        <Box sx={{ width: 400, margin:2 }}>
          <TextField
            onChange={(e) => setSearchItem(e.target.value)}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
        </Box>
        {data?.countries
          .filter((item) =>
            searchItem ? item.code === searchItem.toUpperCase() : item
          )
          .map((card) => (
            <Fragment key={card.code}>
              <Country card={card} />
            </Fragment>
          ))}
      </Box>
    </Container>
  );
}

export default App;
