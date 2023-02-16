import { Box, Typography } from "@mui/material";
import { ICard } from "../../App";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const CountryFooter = ({card}:{card:ICard}) => {
    return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <LocalPhoneIcon sx={{ width: 16, height: 16 }} />
            <Typography>{card.phone}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <GTranslateIcon sx={{ width: 16, height: 16 }} />
            <Typography sx={{ width: 14, height: 14 }}>{card.code}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CurrencyExchangeIcon
              sx={{ width: 16, height: 16, marginRight: 1  }}
            />
            <Typography sx={{ maxWidth: 120, display: "flex", fontSize: 10 }}>
              {card.languages.map(
                (lang) => `${lang.native + "  " + lang.name}`
              )}
            </Typography>
          </Box>
        </Box>
    )
}

export default CountryFooter