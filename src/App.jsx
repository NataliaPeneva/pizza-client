import "./App.css"
import React, { Component } from "react"
import { Switch, Route, Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"

import PizzaComponent from "./components/PizzaComponent"
import ExtrasComponent from "./components/ExtrasComponent"
import ServicesComponent from "./components/ServicesComponent"
import BasketComponent from "./components/BasketComponent"
import AuthRegisterComponent from "./components/AuthRegisterComponent"
import AuthLoginComponent from "./components/AuthLoginComponent"
class App extends Component {
  render() {
    return (
      <div className="App">
        <BasketComponent />

        <div>
          <Switch>
            <Route exact path="/">
              <Link to="/order/pizza">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#80ed99",
                    color: "#0b3954",
                  }}
                >
                  Make a Pizza
                </Button>
              </Link>
            </Route>
            <Route exact path="/order/pizza" render={() => <PizzaComponent />} />
            <Route exact path="/order/extras" render={() => <ExtrasComponent />} />
            <Route exact path="/order/services" render={() => <ServicesComponent />} />
            <Route exact path="/auth/register" render={() => <AuthRegisterComponent />} />
            <Route exact path="/auth/login" render={() => <AuthLoginComponent />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect()(App)
