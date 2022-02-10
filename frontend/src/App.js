import { Switch, Route, useHistory } from "react-router-dom";

import Banner from "./components/Banner/Banner";
import Filter from "./components/Filter/Filter";
import FooterComplete from "./components/Footer/FooterComplete";
import Header from "./components/Header";
import Search from "./components/UI/Search";

const App = () => {
  const History = useHistory();
  return (
    <>
      <Header />
      <Banner />
      <Switch>
        <Route exact path="/" component={Filter} />
        <Route exact path="/dog/:name" component={Search} />
      </Switch>
      <h3 onClick={() => History.push("/")}>go back</h3>
      <FooterComplete />
    </>
  );
};

export default App;
