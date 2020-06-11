import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { authLoginAction } from "../actions"
import { Link, Redirect } from "react-router-dom"

class AuthLoginComponent extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = () => {
    this.props.authLoginAction(this.state)
  }

  render() {
    if (this.props.auth.token) {
      return <Redirect to={"/pizza"} />
    }

    return (
      <div>
        <div>
          <div style={{ backgroundColor: "#80ed99", display: "flex", flexDirection: "column" }}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              InputProps={{ name: "username" }}
              onChange={(event) => this.handleChange(event)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              InputProps={{ name: "password" }}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#80ed99",
              color: "#0b3954",
            }}
            size="small"
            onClick={() => this.handleSubmit()}
          >
            Submit!
          </Button>
        </div>
        <div>
          <Link to="/auth/register">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#80ed99",
                color: "#0b3954",
              }}
              size="small"
            >
              To Register
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = {
  authLoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoginComponent)
