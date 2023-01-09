import { Container } from "@mui/material";
import ViewDetails from "./ViewDetails";

interface Titles {
    totalCartPerson:  string,
    totalDeliveryBoy: string,
    totalUsers: string,
    unassinged: string,
    totalItems: string,
    totalActive: string,
    onGoing: string,
    pastWeek: string,
    denied: string,
    scheduled:string,
}

export default function Dashboard() {

  const cardTitle = {
    totalCartPerson: "Total Cart Person",
    totalDeliveryBoy: "Total Delivery Boy",
    totalUsers: "Total Users",
    unassinged: "Unassigned Orders",
    totalItems: "Total Items",
    totalActive: "Total Active Users",
    onGoing: "Total Ongoing bookings",
    pastWeek: "Past Week Bookings",
    denied: "Denied/Disputed Orders",
    scheduled: "Scheduled Orders",
  };

  return (
    <>
      <Container
        sx={{
          display:"flex",
          alignItems:"center",
          alignSelf:"center",
          flexWrap:"wrap",
          background:
            "transparent linear-gradient(180deg, #FFECD7 0%, #FFC9C9 100%) 0% 0% no-repeat padding-box",
          border: "1px solid #F88A12",
          borderRadius: "10px",
          overflow:"hidden",
        }}
      >
        <Container
        sx={{
            display:"flex",
            flexWrap :"wrap",
            marginTop : "59px"
        }}
        >
        {
        Object.keys(cardTitle).map((value, index) => {
         return <ViewDetails title={cardTitle[value as keyof Titles]} />
        })
        }
        </Container>

      </Container>
    </>
  );
}
