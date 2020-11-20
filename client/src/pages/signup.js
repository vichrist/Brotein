import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    hasAgreed: false
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // auth
    //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(user => {
    //     // make call to the server sending in that unique id from firebase
    //     this.setState({
    //       hasAgreed: true
    //     });
    //   })
    //   .catch(error => console.log(error));
  };


  render() {
    return (
      // <div className="FormCenter">
      //     <form onSubmit={this.handleSubmit} className="FormFields">
      //       <div className="FormField">
      //         <label className="FormField__Label" htmlFor="name">Full Name</label>
      //         <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
      //       </div>
      //       <div className="FormField">
      //         <label className="FormField__Label" htmlFor="password">Password</label>
      //         <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
      //       </div>
      //       <div className="FormField">
      //         <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
      //         <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
      //       </div>

      //       <div className="FormField">
      //         <label className="FormField__CheckboxLabel">
      //             <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
      //         </label>
      //       </div>

      //       <div className="FormField">
      //           <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
      //       </div>
      //     </form>
      //   </div>

      <div className="App">
        <div className="App__Aside">Welcome to Brotein
          <p>Brotein is an one of the favorite workout app in the wold</p>
        </div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div>

          <div className="FormTitle">
            <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
          </div>




        </div>

      </div>
    );
  }
}

export default SignUpForm;