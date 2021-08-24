import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const primary = "#0078D3";
const secondary = "#E8E8E8";
const red = "#FD3A57";

const breakpoints = createBreakpoints({});

export default createTheme({
  palette: {
    common: {
      red: `${red}`,
    },
    primary: {
      main: `${primary}`,
    },
    secondary: {
      main: `${secondary}`,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "18px",
    },
    h3: {
      fontSize: "16px",
    },
    h4: {
      fontSize: "14px",
    },
    h5: {
      fontSize: "12px",
    },
    formLabel: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#5D5D5D",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "8px",
        // padding: "12px 32px",
        lineHeight: "24px",
      },
      outlined: {
        padding: null,
      },
      text: {
        textTransform: "none",
      },
      label: {
        textTransform: "none",
      },
    },
    MuiSwitch: {
      root: {
        width: 28,
        height: 16,
        padding: 0,
        display: "flex",
        overflow: "initial",
        marginRight: "1px",
      },
      switchBase: {
        top: "-1px",
        left: "-2px",
        right: "11px",
        padding: 3,
        "&$checked": {
          transform: "translateX(12px)",
          color: "#fff !important",
          "& + $track": {
            opacity: 1,
            backgroundColor: primary + "!important",
            borderColor: primary,
          },
        },
      },
      thumb: {
        width: 12,
        height: 12,
        boxShadow: "none",
      },
      track: {
        border: "0px solid transparent",
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: "#E8E8E8",
      },
      checked: {},
    },
    MuiStepper: {
      root: {
        width: "40%",
        margin: "auto",
        [breakpoints.down("sm")]: {
          width: "100%",
          paddingLeft: "0",
          paddingRight: "0",
        },
      },
    },
    MuiStepIcon: {
      root: {
        padding: "4px 0",
        width: "32px",
        height: "32px",

        "&$active": {
          padding: "4px",
          border: `1px solid ${primary}`,
          borderRadius: "50%",
        },
        "&$completed": {
          color: "#06C86B",
        },
      },
      text: {
        transform: "translate(-0.1px, 0.5px)",
      },
    },
    MuiStepLabel: {
      iconContainer: {
        zIndex: "10",
      },
      alternativeLabel: {
        background: "#fff",
      },
    },
    MuiStepConnector: {
      lineHorizontal: {
        borderTopWidth: "2px",
        borderColor: "#F3F2F1",
      },
      alternativeLabel: {
        top: "50%",
        left: "-50%",
        right: "50%",
      },
      active: {
        "& $line": {
          borderColor: "#06C86B",
        },
      },
      completed: {
        "& $line": {
          borderColor: "#06C86B",
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "14.5px 12px",
        color: "#000",
      },
      multiline: {
        padding: "8px 12px",
      },
      notchedOutline: {
        borderColor: "#EDEBE9",
      },
      adornedEnd: {
        paddingRight: "0",
      },
    },
    MuiInputBase: {
      root: {
        color: "#5D5D5D",
        fontSize: "16px",
      },
    },
    MuiBadge: {
      anchorOriginTopRightRectangle: {
        top: "4px",
        right: "5px",
        transform: "scale(0.6) translate(50%, -50%)",
      },
      colorError: {
        backgroundColor: "#FD3A57",
      },
    },
    MuiTabs: {
      indicator: {
        display: "none",
      },
      flexContainerVertical: {
        height: "100%",
      },
    },
    MuiTab: {
      root: {
        minWidth: "auto !important",
        fontWeight: "600",
        textTransform: "none",
        "&$selected": {
          backgroundColor: "#fff",

          "& img": {
            filter:
              "invert(35%) sepia(61%) saturate(7500%) hue-rotate(191deg) brightness(100%) contrast(103%)",
          },
        },
      },
      textColorPrimary: {
        color: "#181818",
        padding: "14px 24px",
        minHeight: "auto",

        "& .MuiTab-wrapper": {
          flexDirection: "row",
          gap: "8px",

          "& img": {
            marginBottom: "0 !important",
          },
        },
      },
    },
    MuiAccordionSummary: {
      root: {
        padding: "0",
      },
      content: {
        alignItems: "center",
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: "0",
        flexDirection: "column",
      },
    },
    MuiFilledInput: {
      input: {
        border: "none",
        fontSize: "16px",
        padding: "8px 16px",
        borderRadius: "8px !important",
        background: "transparent",
      },

      underline: {
        backgroundColor: "#F1F1F2",
        borderRadius: "8px !important",
        height: "100%",
        "&::before": {
          content: "none",
          top: "50px",
        },
        "&::after": {
          content: "none",
        },
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: "#F7F7F8 !important",
        boxShadow: "none",
      },
    },
    MuiSelect: {
      outlined: {
        color: "#000",
        "&:focus": {
          background: "transparent",
        },
      },
    },
    MuiCardContent: {
      root: {
        "&:last-child": {
          paddingBottom: "16px",
        },
      },
    },
    MuiToggleButtonGroup: {
      groupedHorizontal: {
        border: "1px solid #EDEBE9",
        borderRadius: "4px",
        "&:not(:last-child)": {
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
        },
        "&:not(:first-child)": {
          borderLeft: "1px solid #EDEBE9",
          marginLeft: "0",
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
        },
      },
    },
    MuiDropzonePreviewList: {
      root: {
        width: "90%",
        height: "90%",
      },
      imageContainer: {
        flexGrow: 0,
        maxWidth: "100%",
        flexBasis: "100%",
        padding: "0 !important",
        "& >img": {
          width: "100%",
          height: "100%",
        },
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: "8px 8px 0 0x",
      },
    },
    MuiBackdrop: {
      root: {
        background: "rgba(0, 0, 0, 0.75) !important",
      },
    },
    MuiFormLabel: {
      root: {
        marginBottom: "0",
      },
    },
    MuiRadio: {
      root: {
        padding: "4px 8px",
        color: "#D9D9D9",
      },
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: "0",
      },
      labelPlacementTop: {
        marginLeft: "0",
        marginRight: "0",
        alignItems: "flex-start",
        "& .MuiFormControlLabel-label ": {
          marginLeft: "0",
          marginBottom: "6px",
          fontSize: "14px",
        },
      },
      label: {
        marginLeft: "6px",
        color: "#5d5d5d",
      },
    },
    MuiFormHelperText: {
      root: {
        marginLeft: "0 !important",
        marginRight: "0 !important",
        color: "#5c5c5d !important",
        fontSize: "14px",
      },
    },
    MuiAutocomplete: {
      root: {},
      tag: {
        background: "#E4F0F9",
        borderRadius: "4px",
        height: "25px",
        fontSize: "14px",
      },
    },
  },
});
