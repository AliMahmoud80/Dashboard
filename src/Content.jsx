import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items";
import AddNewForm from "./AddNewForm";
import LocalizeFeedBack from "./LocalizeFeedBack";
import LocalizeLanguage from "./LocalizeLanguage";
import LocalizeCategory from "./LocalizeCategory";
import LocalizeItem from "./LocalizeItem";
import LocalizeExtra from "./LocalizeExtra";
import Banner from "./Banner";
import Design from "./Design";
import Modifier from "./Modifier";
import Settings from "./Settings";
import Feedback from "./Feedback";
import Categories from "./Categories";
import AddNewItem from "./AddNewItem";
import NewBanner from "./AddNewBanner";
import UpgradePlan from "./UpgradePlan";
import AddNewCategory from "./AddNewCategory";
import theme from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import SignUp from "./Forms/SignUpFormik/Index";
import SignIn from "./Forms/Sign in/SignIn";
import ForgotPassword from "./Forms/Sign in/ForgotPassword";
import ResetPassword from "./Forms/Sign in/ResetPassword";
import React from "react";

const Content = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>

        <Route path="/categories">
          <Categories />
        </Route>

        <Route path="/items">
          <Items />
        </Route>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/localizefeedback">
          <LocalizeFeedBack />
        </Route>
        <Route path="/addnewcategory">
          <AddNewCategory />
        </Route>
        <Route path="/addnewitem">
          <AddNewItem />
        </Route>
        <Route path="/addnewform">
          <AddNewForm />
        </Route>
        <Route path="/localizelanguage">
          <LocalizeLanguage />
        </Route>
        <Route path="/localizecategory">
          <LocalizeCategory />
        </Route>
        <Route path="/localizeitem">
          <LocalizeItem />
        </Route>
        <Route path="/localizeextra">
          <LocalizeExtra />
        </Route>
        <Route path="/modifier">
          <Modifier />
        </Route>
        <Route path="/banner">
          <Banner />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/new-banner">
          <NewBanner />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/upgrade-plan">
          <UpgradePlan />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default Content;
