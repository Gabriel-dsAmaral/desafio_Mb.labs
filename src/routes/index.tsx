import { Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
};
