import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

interface CardDetails {
  title: string;
}

export default function ViewDetails(props: CardDetails) {
  const router = useRouter();

  const viewDeatils = () => {
    router.push("dashboard/worker-details");
  };

  return (
    <>
      <Box
        sx={{
          width: "200px",
          height: "180px",
          borderRadius: "10px",
          background: "white",
          margin: "0px 16px 40px 0px",
        }}
      >
        <Typography
          sx={{
            marginTop: "20px",
            fontSize: "1.1vw",
        
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "70px",
            color: "#F88A12",
            display: "flex",
            justifyContent: "center",
          }}
        >
          12
        </Typography>

        <Box
          sx={{
            background:
              "transparent linear-gradient(180deg, #F88A12 0%, #CD2D05 100%) 0% 0% no-repeat padding-box",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              fontSize: "20px",
              color: "white",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={viewDeatils}
          >
            View Details
          </Typography>
        </Box>
      </Box>
    </>
  );
}
