import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import BannersTable from "./components/BannersTable";

const Banner = () => {
  const [bannersData, setBannersData] = useState([]);

  useEffect(() => {
    setBannersData([
      {
        id: 1,
        name: "Latest offer",
        description: "This for latest offer",
        publish: false,
      },
      {
        id: 2,
        name: "Desserts Banner",
        description: "This for Desserts Banner",
        publish: true,
      },
      {
        id: 3,
        name: "S’mores Banner",
        description: "New banner for birthday",
        publish: true,
      },
    ]);
  }, []);

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      <Sidebar />
      <Grid item xs>
        <Grid item xs={12}>
          <Topbar
            title="Banner"
            subTitle="On this page you can manage your own banner"
            btnTitle="New Banner"
            link="new-banner"
            guideButtons
          />
        </Grid>
        <Grid item xs={12} className="container">
          <BannersTable rows={bannersData} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
