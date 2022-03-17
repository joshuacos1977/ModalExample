import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

import "./App.css";

class OptionsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          id: 1,
          label: "360 Behavioral Health HR Support",
          name: "360 Behavioral Health HR Support",
          email: "360bhhrsupport@qs2500.com",
          group: "360 Behavioral Health",
          value: 1,
        },
        {
          id: 2,
          label: "Albero HR Support",
          name: "Albero HR Support",
          email: "AKAHRSupport@qs2500.com",
          group: "Albero - Retirement Plans",
          value: 2,
        },
      ],
      id: "",
      name: "",
      email: "",
      group: "",
      
    };
  }

  

  handleChange(e) {
    this.setState({ id: e.id, name: e.name, email: e.email, group: e.group });
  }

 
  onSubmit = (e) => {
    e.preventDefault();

  
    let evt = new CustomEvent("updatedata", {
      detail: {
      
        id:this.state.id
      },
    });
    window.dispatchEvent(evt);
    this.props.onHide();
  };
  render() {
    console.log(this.state.options);
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Select
            options={this.state.options}
            onChange={this.handleChange.bind(this)}
          />

          <button>Submit</button>
        </form>
        {/* {this.state.showComponent && <TestComponent name={this.state.name} email={this.state.email} id={this.state.id} group={this.state.group}/>} */}
      </div>
    );
  }
}

export default OptionsMenu;
