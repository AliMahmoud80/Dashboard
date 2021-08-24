import { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ModifiersTable from "./components/ModifiersTable";
import CreateModifierDialog from "./components/CreateModifierDialog";

const Modifier = () => {
  const [modifiersData, setModifiersData] = useState([]);
  const [newModifierDialog, setNewModifierDialog] = useState(false);

  useEffect(() => {
    setModifiersData([
      {
        id: 1,
        name: "Sauce Please",
        modifiers: 5,
        active: false,
      },
      {
        id: 2,
        name: "Toppings",
        modifiers: 10,
        active: true,
      },
    ]);
  }, []);

  return (
    <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
      <Sidebar />
      <Grid item xs>
        <Grid item xs={12}>
          <Topbar
            title="Modifier"
            subTitle="On this page you can manage your group modifier group"
            btnTitle="New Modifier Group"
            isBtn
            guideButtons
            onBtnClick={() => {
              setNewModifierDialog(true);
            }}
          />
        </Grid>
        <Grid item xs={12} className="container">
          <ModifiersTable rows={modifiersData} />
        </Grid>
      </Grid>
      <CreateModifierDialog
        open={newModifierDialog}
        onClose={() => {
          setNewModifierDialog(false);
        }}
      />
    </Grid>
  );
};

export default Modifier;
