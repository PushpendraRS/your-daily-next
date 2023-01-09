import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <Container
        sx={{
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            textAlign: "center",
          }}
        >
          404 | Page Not Found
        </Typography>

        <Container sx={{display:"flex",justifyContent:"center"}}>
          <Button
            sx={{
              textAlign: "center",
            }}
          >
            <Link href="/dashboard"> Back to Homepage </Link>
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default PageNotFound;
