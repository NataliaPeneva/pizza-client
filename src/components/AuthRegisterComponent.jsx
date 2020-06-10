import React, { Component } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { authRegisterAction } from "../actions"

class AuthRegisterComponent extends Component {
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
    this.props.authRegisterAction(this.state)
  }

  render() {
    return (
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
    )
  }
}

const mapDispatchToProps = {
  authRegisterAction,
}

export default connect(null, mapDispatchToProps)(AuthRegisterComponent)
