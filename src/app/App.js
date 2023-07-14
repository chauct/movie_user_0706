import Home from "features/booking/pages/Home";
import Detail from "features/booking/pages/Detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "features/authentication/pages/Profile";
import Signin from "features/authentication/pages/Signin";
import Signup from "features/authentication/pages/Signup";
import Header from "common/components/Header";
import Footer from "common/components/Footer";
import PageNotFound from "common/components/404";
import News from "features/booking/components/News";
import Apps from "features/booking/components/Apps";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Detail} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
        <Route path="/apps" component={Apps} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
