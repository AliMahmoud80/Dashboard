import {
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import HashDost from "./Icons/HashDost";
import swal from "sweetalert";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "8px",
    paddingLeft: "46px",

    [theme.breakpoints.down("lg")]: {
      paddingLeft: "16px",
    },
  },
  radioContainer: {
    // width: "359px",
    // width: "100%",
    display: "flex",
    marginRight: "0",
    borderRadius: "8px",
    marginBottom: "16px",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px 16px 18px 8px",
    border: "1px solid #EDEBE9",
    justifyContent: "space-between",
    backgroundColor: "rgb(255, 255, 255, 0.2)",
  },
  selected: {
    border: "1px solid #0078D3",
    backgroundColor: "rgb(228, 240, 249, 0.2)",
  },
  label: {
    color: "#181818",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "19px",
    letterSpacing: "0px",
  },
  priceTag: {
    fontFamily: "Inter",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: "0px",
    color: "#5D5D5D",
  },
  price: {
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "19px",
    letterSpacing: "0px",
  },
  discount: {
    color: "#1890FF",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "19px",
    letterSpacing: "0px",
  },
  creditCard: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "17px",
    letterSpacing: "0px",
    color: "#181818",
  },

  button: {
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "17px",
    letterSpacing: "0px",
  },
  edit: {
    color: "#5D5D5D",
  },
  remove: {
    color: "#FD3A57",
    paddingRight: 0,
  },
}));

const RadioButton = ({
  label,
  value,
  price,
  selected,
  icon,
  discount,
  cardNumber,
}) => {
  const classes = useStyle();
  const handleShowDelete = () => {
    swal({
      title: "Are you sure?",
      icon: "error",
      text: "You will not be able to recover this entity! ",
      buttons: ["Cancel", "Yes Delete"],
    });
  };

  const number = cardNumber && cardNumber.substr(cardNumber.length - 4);

  return (
    <FormControl
      className={`${classes.radioContainer} ${selected && classes.selected}`}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <FormControlLabel
            value={value}
            control={<Radio color="primary" />}
            label={
              <Typography
                style={{ fontWeight: selected ? "700" : "500" }}
                className={classes.label}
              >
                {label}
              </Typography>
            }
          />
        </Grid>
        <Grid item>
          {discount && (
            <Typography className={classes.discount}>
              Save {discount}%
            </Typography>
          )}
          {icon}
        </Grid>
      </Grid>
      {price && (
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          style={{ paddingLeft: "48px", marginTop: "8px" }}
        >
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography className={classes.price}>${price}</Typography>
            <Typography className={classes.priceTag}>/mo</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.priceTag}>Billed Monthly</Typography>
          </Grid>
        </Grid>
      )}
      {cardNumber && (
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className={classes.root}
        >
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <HashDost key={i} style={{ marginRight: "3px" }} />
            ))}
            <div style={{ marginRight: "10px" }} />
            {Array.from({ length: 4 }).map((_, i) => (
              <HashDost key={i} style={{ marginRight: "3px" }} />
            ))}
            <div style={{ marginRight: "10px" }} />
            {Array.from({ length: 4 }).map((_, i) => (
              <HashDost key={i} style={{ marginRight: "3px" }} />
            ))}
            <div style={{ marginRight: "10px" }} />
            <Typography className={classes.creditCard}>{number}</Typography>
          </Grid>
          <Grid item>
            <Button
              color="#5D5D5D"
              variant="text"
              className={`${classes.button} ${classes.edit}`}
              startIcon={<EditOutlined />}
            >
              Edit
            </Button>
            <Button
              color="#FD3A57"
              variant="text"
              className={`${classes.button} ${classes.remove}`}
              startIcon={<DeleteOutline fontSize="small" />}
              onClick={handleShowDelete}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      )}
    </FormControl>
  );
};

export default RadioButton;
