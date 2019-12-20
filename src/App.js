import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/characterlist/:characterID">
          <CharacterList />
        </Route>
        <Route path="/locationslist/:locationID">
          <LocationsList />
        </Route>
        <Route path="/searchlist">
        </Route>
      </Switch>
    </main>
  );
}
