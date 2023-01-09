import styled from "@emotion/styled";
import {
  Backdrop,
  CircularProgress,
  Container,
  Divider,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DataTable from "../../components/DataTable";

const StyledTab = styled(Tab)({
  "&.MuiTab-root": {
    "&.Mui-selected": {
      color: "#F88A12",
    },
  },
});

/** Component Function Starts from here */

const Items = () => {
  const [selectedTab, setSelectedTab] = useState("vegetables");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const tableHeader = [
    "S. No",
    "Image",
    "Vegetables Name",
    "Base Qty.",
    "Price (per base qty)",
    "In Stock",
  ];

  const tabTitles = {
    vegetables: "vegetables",
    fruits: "fruits",
    others: "others",
  };

  const tableData = [
    {
      sno: 1,
      image: "",
      vegetableName: "first",
      baseQty: 5,
      price: "200",
      inStock: "true",
    },

    {
      sno: 1,
      image: "",
      vegetableName: "first",
      baseQty: 5,
      price: "200",
      inStock: "false",
    },
    {
      sno: 1,
      image: "",
      vegetableName: "first",
      baseQty: 5,
      price: "200",
      inStock: "true",
    },
  ];

  return (
    <>
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
            + Add New Items
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
            label="Vegetables"
            value={tabTitles.vegetables}
          ></StyledTab>
          <Divider orientation="vertical" flexItem></Divider>
          <StyledTab
            sx={{ color: "black" }}
            label="Fruits"
            disableRipple
            value={tabTitles.fruits}
          ></StyledTab>
          <Divider orientation="vertical" flexItem></Divider>
          <StyledTab
            sx={{ color: "black" }}
            label="Others"
            disableRipple
            value={tabTitles.others}
          ></StyledTab>
        </Tabs>
      </Container>

      <DataTable tableHead={tableHeader} data={tableData} />
    </>
  );
};

export default Items;
