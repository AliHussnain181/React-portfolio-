import React, { Component } from "react";
import "./navbar.css"
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai"

class Navbar extends Component {

  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked:
        !this.state.clicked
    })
  }

  render() {
    return <nav>
      <div className="name active">AH</div>

      <div>
        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
          <li><a className="active" href="home">Home</a></li>
          <li><a href="#hero">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#skill">Skill</a></li>
        </ul>
      </div>
      <div id="mobile" onClick={this.handleClick}>
        {this.state.clicked ? <AiFillCloseCircle /> : <AiOutlineMenu />}
      </div>

    </nav>
  };
}

export default Navbar;
