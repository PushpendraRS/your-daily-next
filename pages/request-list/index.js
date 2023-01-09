import { Cancel, Close } from "@mui/icons-material";
import {
    Autocomplete,
  Box,
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import DataTable from "../../components/DataTable";

const RequestList = () => {
  const tableHeader = ["S.No", "User ID", "Name", "Contact", "Action"];

  const [openDialog, setOpenDialog] = useState(false);

  const tableData = [
    {
      sno: "1",
      userId: "####222",
      name: "kamlesh",
      contact: "998898998",
    },
    {
      sno: "2",
      userId: "####222",
      name: "kamlesh",
      contact: "998898998",
    },

    {
      sno: "2",
      userId: "####222",
      name: "kamlesh",
      contact: "998898998",
    },

    {
      sno: "2",
      userId: "####222",
      name: "kamlesh",
      contact: "998898998",
    },

    {
      sno: "2",
      userId: "####222",
      name: "kamlesh",
      contact: "998898998",
    },

    {
      sno: "2",
      userId: "####222",
      name: "kamlesh",
      contact: "998898998",
    },
  ];

  const showDialog = () => {
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <Dialog open={openDialog}>
        <Box sx={{ background: "#F88A12", width: "100%", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}}>
          <Close sx={{float:"right",margin:"8px 19px"}} onClick={closeDialog}/>
        </Box>

        <Typography
          sx={{
            fontSize: "22px",
            textAlign: "center",
            margin: "0px 44px",
            marginTop: "22px",
          }}
        >
          To Whom you want to Assign this order
        </Typography>

        <Container sx={{marginTop:"21px",display:"flex",padding:"12px"}}>
            <TextField sx={{height:"22px"}}></TextField>
            <Button sx={{background:"orange",color:"white",height:"22px"}}>Assign</Button>
        </Container>
       
      </Dialog>

      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#F88A12",
            padding: "8px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            marginTop: "25px",
          }}
        >
          <Typography
            sx={{ color: "white", fontWeight: "bold", marginLeft: "87px" }}
          >
            RequestList
          </Typography>
          <Cancel sx={{ marginRight: "26px" }} />
        </Box>

        <Table>
          <TableHead>
            {tableHeader.map((value) => {
              return (
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#F88A12",
                    border: "1px solid #70707066 ",
                  }}
                  align="center"
                >
                  {value}
                </TableCell>
              );
            })}
          </TableHead>

          <TableBody>
            {tableData.map((value) => {
              return (
                <TableRow>
                  {Object.values(value).map((value, index) => {
                    return (
                      <>
                        <TableCell
                          sx={{ border: "1px solid #70707066 " }}
                          align="center"
                        >
                          {value}
                        </TableCell>
                      </>
                    );
                  })}
                  <TableCell
                    align="center"
                    sx={{ border: "1px solid #70707066" }}
                  >
                    <Button
                      sx={{
                        background: "#FF0000",
                        color: "white",
                        height: "25px",
                      }}
                    >
                      Deny
                    </Button>
                    <Button
                      onClick={showDialog}
                      sx={{
                        background: "#0E8B00",
                        color: "white",
                        marginLeft: "8px",
                        height: "25px",
                      }}
                    >
                      Accept
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {/* <DataTable tableHead={tableHeader}/> */}
      </Container>
    </>
  );
};

export default RequestList;
