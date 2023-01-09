import {
  Backdrop,
  CircularProgress,
  Container,
  Divider,
  Tab,
  Tabs, 
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import TopBar from "../../../components/TopBar";
import { getWorkerDetails } from "../../network/ApiModule";

const StyledTab = styled(Tab)({
  "&.MuiTab-root": {
    "&.Mui-selected": {
      color: "#F88A12",
    },
  },
});

const tableHeader = [
  "Name",
  "Contact",
  "Registration Date",
  "Total Orders",
  "Denied Orders",
  "Cancel",
  "Total Business",
  "Average Rating",
  "Flagged",
];

export default function WorkerDetails() {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState("cart-boy");
  const [workerData, setWorkerData] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);

    switch (newValue) {
      case "cart-boy":
       
        break;

      case "delivery-boy":
      
        break;
    }
  };

  const tabTitles = {
    cartPerson: "cart-boy",
    deliveryBOy: "delivery-boy",
    user: "user",
  };

  useEffect(() => {
    setLoading(true);
    getWorkerDetails(selectedTab).then((res) => {
      setLoading(false);
      setWorkerData(res);
    });
    () => {
      setWorkerData([]);
    };
  }, [selectedTab]);

  return (
    <>
      <Backdrop sx={{ color: "#F88A12" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* <TopBar/> */}

      <Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "27px",
          }}
        >
          <Typography sx={{ fontSize: "16px" }}>Back</Typography>
          <Typography sx={{ color: "#F88A12", fontSize: "16px" }}>
            + Add new cart person
          </Typography>
        </Container>

        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: "#F88A12",
              height: "6px",
              color: "black",
            },
          }}
          value={selectedTab}
          onChange={handleChange}
          variant="fullWidth"
          sx={{ border: "1px solid black", marginTop: "25px" }}
        >
          <StyledTab
            sx={{ color: "black" }}
            disableRipple
            label="Cart Person Details"
            value={tabTitles.cartPerson}
          ></StyledTab>
          <Divider orientation="vertical" flexItem></Divider>
          <StyledTab
            sx={{ color: "black" }}
            label="Delivery Boy Details"
            disableRipple
            value={tabTitles.deliveryBOy}
          ></StyledTab>
          <Divider orientation="vertical" flexItem></Divider>
          <StyledTab
            sx={{ color: "black" }}
            label="User Details"
            disableRipple
            value={tabTitles.user}
          ></StyledTab>
        </Tabs>
      </Container>
      <DataTable tableHead={tableHeader} data={workerData} />
    </>
  );
}
