import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { InicioWeb } from "../components/siteweb/InicioWeb";
export const RutaPrimaria = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <div
                    style={{
                        marginTop: "7rem",
                    }}
                >
                    <Switch>
                        <Route exact path="/" component={InicioWeb} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
