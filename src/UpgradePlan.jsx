import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import {
  Grid,
  TextField,
  RadioGroup,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ArrowLeft from "./components/Icons/ArrowLeft";
import SectionInfo from "./components/SectionInfo";
import invoice from "./assets/invoice.svg";
import Visa from "./components/Icons/Visa";
import creditCard from "./assets/creditCard.svg";
import RadioButton from "./components/RadioButton";
import MasterCard from "./components/Icons/MasterCard";
import CardModal from "./components/CardModal";

const useStyle = makeStyles((theme) => ({
  tabPanel: {
    width: "100%",
    padding: "24px",
    [theme.breakpoints.down("md")]: {
      padding: "16px",
    },
  },
  tabPar: {
    [theme.breakpoints.down("md")]: {
      width: "100%",

      "& button": {
        width: "50%",
        maxWidth: "none",
      },
    },
  },
  title: {
    color: "#181818",
    fontFamily: "Inter",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px",
    letterSpacing: "0px",
    marginBottom: "8px",
  },
  subTitle: {
    color: "#181818",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "17px",
    letterSpacing: "0px",
  },
  billDate: {
    marginBlock: "24px",
    paddingBlock: "24px",
    borderTop: "1px solid #EDEBE9",
    borderBottom: "1px solid #EDEBE9",
  },
  usedCard: {
    marginBottom: "24px",
    paddingBottom: "24px",
    borderBottom: "1px solid #EDEBE9",
  },
  cvvInput: {
    height: "43px",
    width: "90px",
    marginTop: "8px",
    borderRadius: "4px",
  },
  button: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "center",
  },
}));

const UpgradePlan = () => {
  const classes = useStyle();

  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [choosePlan, setChoosePlan] = useState("annual");
  const [chooseCard, setChooseCard] = useState("1231647579846475");

  const openModalHandler = () => {
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const chossePlanHandler = (event) => {
    setChoosePlan(event.target.value);
  };

  const chosseCardHandler = (event) => {
    setChooseCard(event.target.value);
  };

  return (
    <Fragment>
      <CardModal open={open} onCloseModal={closeModalHandler} />
      <Grid container style={{ paddingLeft: "250px", minWidth: "1300px" }}>
        <Sidebar />
        <Grid container item direction="column" xs>
          <Grid container>
            <Topbar
              icon={<ArrowLeft />}
              title="Upgrade Your Plan"
              onClickLeft={() => history.goBack()}
              subTitle="Upgrade your current plan to PRO so you can enjoy full features"
            />
          </Grid>
          <Grid container style={{ height: "calc(100% - 102px)" }}>
            <Grid
              item
              xs
              style={{
                padding: "24px",
                borderRight: "1px solid #EDEBE9",
                minWidth: "350px",
              }}
            >
              <SectionInfo
                icon={<img src={invoice} alt="invoice" />}
                title="Choose Your New Plan"
                subTitle="Choose annual or monthly plan"
              />
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={choosePlan}
                onChange={chossePlanHandler}
              >
                <RadioButton
                  label="Annual Pro Plan"
                  value="annual"
                  price={15}
                  discount={20}
                  selected={choosePlan === "annual"}
                />
                <RadioButton
                  label="Monthly Pro Plan"
                  value="monthly"
                  price={20}
                  selected={choosePlan === "monthly"}
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              xs
              style={{
                padding: "24px",
                borderRight: "1px solid #EDEBE9",
                minWidth: "400px",
              }}
            >
              <SectionInfo
                icon={<img src={creditCard} alt="creditCard" />}
                title="Choose Card"
                subTitle="Choose which card to use"
                btnTitle="+ New Card"
                onClick={openModalHandler}
              />
              <RadioGroup
                style={{ maxWidth: "100%" }}
                aria-label="gender"
                name="gender1"
                value={chooseCard}
                onChange={chosseCardHandler}
              >
                <RadioButton
                  label="Abu Qaseem Al Ghafary"
                  value="6482763459821231"
                  icon={<MasterCard />}
                  cardNumber="6482763459821231"
                  selected={chooseCard === "6482763459821231"}
                />
                <RadioButton
                  label="Dr. Salah Qaseem"
                  value="1231647579846475"
                  icon={<Visa />}
                  cardNumber="1231647579846475"
                  selected={chooseCard === "1231647579846475"}
                />
              </RadioGroup>
            </Grid>
            <Grid item xs style={{ padding: "24px", maxWidth: "450px" }}>
              <Typography className={classes.title}>Summary</Typography>
              <Typography className={classes.subTitle}>
                Please review your plan upgrade
              </Typography>
              <Typography
                style={{
                  fontWeight: "500",
                  marginTop: "19px",
                  marginBottom: "8px",
                }}
                className={classes.subTitle}
              >
                Plan Valid Until
              </Typography>
              <Typography className={classes.title}>1 April 2023</Typography>
              <Typography className={classes.subTitle}>
                When upgrading to Pro Plan you will keep enjoying all features
              </Typography>
              <Grid className={classes.billDate}>
                <Typography
                  style={{
                    fontWeight: "500",
                  }}
                  className={classes.subTitle}
                >
                  Billed Yearly
                </Typography>
                <Typography className={classes.title}>$580</Typography>
              </Grid>
              <Grid container className={classes.usedCard}>
                <Grid item xs={12}>
                  <Typography
                    style={{
                      fontWeight: "500",
                      marginBottom: "8px",
                    }}
                    className={classes.subTitle}
                  >
                    Card Used
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Typography className={classes.title}>
                        Dr. Salah Qaseem
                      </Typography>
                      <Typography className={classes.subTitle}>
                        Visa Ending 4122
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Visa />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "24px" }}>
                  <Typography
                    style={{ fontWeight: "500", marginBottom: "8px" }}
                    className={classes.subTitle}
                  >
                    Card CVV Code
                  </Typography>
                  <Typography className={classes.subTitle}>
                    Please insert your CVV code to confirm
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="CVV"
                    type="number"
                    InputProps={{
                      className: classes.cvvInput,
                      inputProps: {
                        type: "number",
                        min: 0,
                        max: 3,
                        maxlength: 3,
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
                style={{ boxShadow: "none" }}
              >
                Upgrade Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default UpgradePlan;
