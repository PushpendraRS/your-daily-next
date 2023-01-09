import {
  Stack,
  Box,
  Avatar,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import StyledOutlinedInput from "../util-components/StyledOutlinedInput";
import PersonIcon from "@mui/icons-material/Person";
import { loginUser } from "../network/ApiModule";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const handleRoute = () =>  ({user : null})

export default function Login() {
  const router = useRouter();
  const user   = handleRoute();

  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },

    onSubmit: () => {},
  });

  const login = () => {
    loginUser({ email: "y1@yd.com", password: "1234" })
      .then((res) => {
        console.log(res.Authorization);
        sessionStorage.setItem("token", res.Authorization);
        router.replace("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Stack
        sx={{
          background:
            "transparent linear-gradient(180deg, #FFECD7 0%, #FFC9C9 100%) 0% 0% no-repeat padding-box",
          display: "flex",
          height: "100vh",
          justifyContent: "space-between",
        }}
        direction="row"
      >
        <Stack sx={{ width: "100%" }} direction="column" width="lg">
          <Avatar
            sx={{ marginLeft: "100px", marginTop: "24px", width: "200px" }}
            variant="square"
            src="./logo.svg"
          />
          <Avatar
            sx={{
              padding: "6px",
              marginLeft: "165px",
              marginTop: "20px",
              width: "725px",
              height: "507px",
            }}
            variant="square"
            src="./thirteen.svg"
          />
        </Stack>

        <Container
          sx={{ display: "flex", alignItems: "center", marginLeft: "92px" }}
        >
          <Box
            sx={{
              width: "345px",
              height: "418px",
              borderRadius: "12px",
              background: "white",
            }}
          >
            <Typography
              sx={{
                color: "#1D2226",
                fontSize: "28px",
                marginTop: "43px",
                marginLeft: "22px",
              }}
            >
              Login
            </Typography>
            <Typography
              sx={{
                color: "#1D2226",
                opacity: "0.6",
                fontSize: "18px",
                marginTop: "6px",
                marginLeft: "22px",
              }}
            >
              Please login to your account
            </Typography>

            <StyledOutlinedInput
              key={"userId"}
              hint={"User ID"}
            ></StyledOutlinedInput>

            <StyledOutlinedInput
              key={"password"}
              hint={"Password"}
            ></StyledOutlinedInput>

            <Button
              sx={{
                width: "300px",
                height: "50px",
                background:
                  " transparent linear-gradient(180deg, #F88A12 0%, #CD2D05 100%) 0% 0% no-repeat padding-box",
                color: "white",
                marginTop: "23px",
                marginLeft: "22px",
              }}
              onClick={login}
            >
              Login
            </Button>

            <Typography
              sx={{ marginTop: "17px", float: "right", marginRight: "19px" }}
            >
              Forgot Password?
            </Typography>
          </Box>
        </Container>
      </Stack>
    </>
  );
}
