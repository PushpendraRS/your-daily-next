import { ContactEmergency, ImportContacts } from "@mui/icons-material";
import {
  Avatar,
  Backdrop,
  Checkbox,
  CircularProgress,
  Container,
  createTheme,
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
import { styled } from "@mui/system";
import { useState } from "react";

const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    border: "1px solid black",
    textAlign: "center",
  },
});

interface TableHeader {
  sno?: number;
  orderID?: string;
  userAddress?: string;
  name?: string;
  contact?: string;
  regDate?: string;
  totalOrder?: string;
  denied?: string;
  cancelled?: string;
  totalBusiness?: string;
  avgRating?: string;
  flagged?: string;
}

interface TableData {
  tableHead: TableHeader;
  data: TableCellData;
}

interface TableCellData {
  image?: "";
  inStock?: "";
  //   sno?: number;
  //   orderID?: string;
  //   userAddress?: string;
  //   name?: string;
  //   contact?: string;
  //   regDate?: string;
  //   totalOrder?: string;
  //   denied?: string;
  //   cancelled?: string;
  //   totalBusiness?: string;
  //   avgRating?: string;
  //   flagged?: string;
}

const DataTable = ({ tableHead, data }: TableData) => {
  console.log(data);

  return (
    <>
      <Container>
        <Table sx={{ marginTop: "26px", border: "1px solid black" }}>
          <TableHead sx={{ background: "#FFF0DF" }}>
            <TableRow>
              {tableHead &&
                tableHead?.map((value: string, index: number) => {
                  return (
                    <StyledTableCell key={index} align="center">
                      {value}
                    </StyledTableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((value: any) => {
                return (
                  <TableRow>
                    {Object.keys(value).map((res, index) => {
                      return (
                        <>
                          {res === "image" ? (
                            <StyledTableCell>
                              <ContactEmergency />
                            </StyledTableCell>
                          ) : res === "inStock" ? (
                            <StyledTableCell>{value[res]}</StyledTableCell>
                          ) : (
                            <StyledTableCell>{value[res]}</StyledTableCell>
                          )}
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}

            {/* {
                data && 
            data.map((res: any) => {
              return (
                <TableRow>
                  <StyledTableCell>{res.name}</StyledTableCell>
                  <StyledTableCell>{res.contact}</StyledTableCell>
                  <StyledTableCell>{res.regDate}</StyledTableCell>
                  <StyledTableCell>{res.totalOrders}</StyledTableCell>
                  <StyledTableCell>{res.deniedOrders}</StyledTableCell>
                  <StyledTableCell>{res.canceledOrders}</StyledTableCell>
                  <StyledTableCell>{res.totalAmount}</StyledTableCell>
                  <StyledTableCell>{res.deniedOrders}</StyledTableCell>
                  <StyledTableCell>{res.flagged}</StyledTableCell>
                </TableRow>
              );
            })} */}

            {/* {workerData.map((res) => (
              <TableRow sx={{ border: "1px solid black" }}>
                {Object.keys(res).map((value, index) => {
                  return (
                    <TableCell sx={{ border: "1px solid black" }} key={res.id}>
                      {res[value]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default DataTable;
