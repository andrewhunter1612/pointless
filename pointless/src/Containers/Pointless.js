import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "../Components/CreateGame/Create";
import Join from "../Components/JoinGame/Join";
import WaitingRoom from "../Components/WaitingRoom/WaitingRoom";
import Welcome from "../Components/Welcome/Welcome";

const Pointless = () => {


    return (
        <>

        <Router>
            <Route exact path="/">
                <Welcome/>
            </Route>

            <Route exact path="/new-game">
                <Create/>
            </Route>

            <Route exact path="/join-game">
                <Join/>
            </Route>


            <Route path="/waiting-room">
                <WaitingRoom/>
            </Route>
        </Router>
        </>
    )
}
export default Pointless