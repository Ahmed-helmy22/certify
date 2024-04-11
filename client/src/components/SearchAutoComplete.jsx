import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/material";
import { useDashboardContext } from "../pages/DashboardLayout";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          // Add your custom styles here
          color: 'white', // Change text color to red as an example
          // Add more styles as needed
        },
        placeholder: {
          // Change the color of the placeholder
          color: 'white', // Change placeholder color to green as an example
        },        
      },

    },
  },
});

const SearchAutoComplete = ({badges , setSelectedBadgeId}) => {
  const [jsonResult, setJsonResult] = useState([]);
  
  const [selectedBadgeId, setSelectedBadgeIdLocal] = useState(null);

  const { isDarkTheme } = useDashboardContext();

  useEffect(() => {
    setJsonResult(badges.data)
  }, [badges]);


  const handleSelect = (event, value) => {
    setSelectedBadgeIdLocal(value ? value._id : null);
    setSelectedBadgeId(value ? value._id : null);
  };

  return (
    <ThemeProvider theme={theme}>
    <Stack sx={{ margin: "auto" , paddingBottom : '10px' }}>
      <Autocomplete
        id="user_demo"
        getOptionLabel={(jsonResult) =>
          `${jsonResult.title}`
        }
        options={jsonResult}
        onChange={handleSelect}
        sx={{
        //   width: 300,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: `${isDarkTheme ? "white !important" : ""}`, // Set border color to white
            },
            "&:hover fieldset": {
              borderColor: `${isDarkTheme ? "white !important" : ""}`, // Set border color on hover to white
            },
            "&.Mui-focused fieldset": {
              borderColor: `${isDarkTheme ? "white !important" : ""}`, // Set border color when focused to white
            },
          },
          "& input::placeholder": {
            color: `${isDarkTheme ? "white !important" : ""}`, // Set placeholder color to white
          },
          "& .MuiAutocomplete-popupIndicator": {
            color: `${isDarkTheme ? "white !important" : ""}`, // Set drop-down button color to white
          },
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        noOptionsText={"No Available user"}
        renderOption={(props, jsonResult) => (
          <Box component="li" {...props} key={jsonResult._id}>
            {jsonResult.title}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for user"
            
            sx={{
              "& input::placeholder": {
                color: "red", // Set your desired color for the placeholder
              },
            }}
          />
        )}
      />
    </Stack>
    </ThemeProvider>
  );
};

export default SearchAutoComplete;
