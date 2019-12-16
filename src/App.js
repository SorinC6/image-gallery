import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import Gallery from "./components/Gallery/Gallery";
import ImageView from "./components/Gallery/ImageView";

export default function App() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" component={Gallery} />
        <Route path="/img/:id" component={ImageView} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}
