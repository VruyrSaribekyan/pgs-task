import { Box, Typography } from "@mui/material"
import { ICard } from "../../App"

const CountryHeader = ({card}:{card:ICard}):JSX.Element => {
    return(
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            style={{ width: 50, height: 40 }}
            src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${card.code}.svg`}
            alt=""
          />
          <Typography variant="h5">
            {card.name}
            <Typography>{card.capital}</Typography>
          </Typography>
        </Box>
        <Box sx={{ minHeight: 50 }}>
          <Typography>{card.continent.name}</Typography>
        </Box>
      </Box>
    )
}

export default CountryHeader