import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MessagePage from "./pages/MessagePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/message">
          <MessagePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
