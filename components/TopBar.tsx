import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const TopBar = () =>  {
  const router = useRouter();

  const logout = () => {
    router.replace("/");
    sessionStorage.removeItem("token");
  };

  return (
    <>
      <Stack direction="column">
        <AppBar style={{ background: "#F88A12" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row">
              <IconButton>
                <Avatar
                  sx={{ width: "73px", height: "51px" }}
                  src="./appbar-logo.svg"
                />
              </IconButton>

              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "center",
                  fontSize: "24px",
                }}
              >
                Dashboard
              </Typography>
            </Stack>

            <Stack direction="row">
              <Avatar
                sx={{ width: "37px", height: "27px", marginRight: "26px" }}
                variant="square"
                src="./user-request.svg"
              />
              <LogoutIcon
                sx={{ marginRight: "119px", cursor: "pointer" }}
                onClick={logout}
              />
            </Stack>
          </Toolbar>
        </AppBar>

        {/* <WorkerInfo /> */}

        {/* <WorkerDetails tableHead={tableHead} data={tableData} /> */}
      </Stack>
    </>
  );
}

export default TopBar;
