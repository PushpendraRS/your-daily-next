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
import TopBar from "../../components/TopBar";
import Dashboard from "../../components/Dashboard/Dashboard";


interface tableHeader {
  name: string;
  contact: string;
  regDate: string;
  totalOrder: string;
  denied: string;
  cancelled: string;
  totalBusiness: string;
  avgRating: string;
  flagged: string;
}

export default function index() {
  const router = useRouter();

  // const tableHeaderTitle = {
  //   name: "Name",
  //   contact: "Contact",
  //   regDate: "Registration Date",
  //   totalOrder: "Total Orders",
  //   denied: "Denied Orders",
  //   cancelled: "Cancel",
  //   totalBusiness: "Total Business",
  //   avgRating: "Average Rating",
  //   flagged: "Flagged",
  // };

  

  const ordersTableHead = [
    "S.No",
    "Order ID",
    "User Address",
    "Scheduled on",
    "Scheduled for",
    "Contact",
    "Action"
  ]

  const tableData = [
    {
      sno      : 1,
      orderID  : "31253687",
      userAddress : "string",
      name     : "Name",
      contact  : "123456789",
      regDate   :     "12/12/12",
      totalOrders : "50000000",
      deniedOrders    : "10000000",
      canceledOrders : "5000",
      totalAmount : "503482983",
      avgRating : "1",
      flagged   : "true"
     },


     {
      sno      : 1,
      orderID  : "31253687",
      userAddress : "string",
      name     : "Name",
      contact  : "123456789",
      regDate   :     "12/12/12",
      totalOrders : "50000000",
      deniedOrders    : "10000000",
      canceledOrders : "5000",
      totalAmount : "503482983",
      avgRating : "1",
      flagged   : "true"
     },

     {
      sno      : 1,
      orderID  : "31253687",
      userAddress : "string",
      name     : "Name",
      contact  : "123456789",
      regDate   :     "12/12/12",
      totalOrders : "50000000",
      deniedOrders    : "10000000",
      canceledOrders : "5000",
      totalAmount : "503482983",
      avgRating : "1",
      flagged   : "true"
     },

  ]

  const logout = () => {
    router.replace("http://localhost:3000/login");
    sessionStorage.removeItem("token");
  };

  return (
    <>
       <Stack direction="column" spacing={20}>
       <TopBar /> 
       <Dashboard/>
       </Stack>
    </>
  );
}
