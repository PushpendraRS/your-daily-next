import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from '@mui/icons-material/Visibility';

interface props {
  hint?: string;
  key?: string;
}

const StyledTextField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "black",
    fontWeight: "bold",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
}));

export default function StyledOutlinedInput(props: any) {

  console.log(props);

  return (
    <>
      <StyledTextField
        fullWidth
        variant="outlined"
        sx={{ width: "300px", height: "50px", margin: "12px 22px" }}
        label={props.hint}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              { props.key === "userId" ? <PersonIcon /> : <VisibilityIcon />}
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
}
