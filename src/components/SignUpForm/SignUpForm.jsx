import { Component } from "react";
import * as usersService from '../../utilities/users-service.js';

export default class SignUpForm extends Component {
  // Class Field approach for defining state. Internally, the class field syntax is converted into the constructor method approach
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  /*
    The handleChange() method can't be defined using the usual syntax for defining an instance method of a class like that of the render() method.

    The reason the usual syntax won't work is because the method will be invoked as a callback and thus will not have `this` bound to the component 
    instance, so we won't be able to access this.props, this.setState(), etc.

    There are two solutions to ensure that a method has `this` correctly set to the component instance:
    - Define the method as usual and use JavaScript's `bind` method in the constructor to explicitly set the value of `this`
    - Use the class field syntax along with an arrow function when defining the method which by its very nature fixes the issue due to the way class fields are actually initialized in the constructor

    Below is how we use class field syntax to properly define methods used to handle events in class components:
  */
  handleChange = (evt) => {
    /*
      There's two key differences in how state is updated in class vs. function components:
      - Class components always update state by invoking the inherited setState() method vs. invoking the setter function returned by the useState hook in function components
      - setState() accepts an object as an arg and this object is merged into the existing state object. This differs with how a function component's setter function replaces that state with the value provided entirely

      Below, the object passed to setState() is merged with the current state object which is why we don't need to specify the other states
    */
    
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  };

  handleSubmit = async (evt) => {
    evt.preventDefault() // This line prevents the default behavior of submitting a form which is to cause a page refresh
    try {
      // We don't want to send the 'error' or 'confirm' property, so we make a copy of the state object, then delete them
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;

      // The promise returned by the signUp service method will resolve to the user object included in the payload of the JSON Web Token (JWT)
      const user = await usersService.signUp(formData);
      
      this.props.setUser(user)
    } catch(error) {
      console.log(error.message)
      this.setState({ error: 'Sign Up Failed - Try Again' })
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;

    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label htmlFor="signup-name">Name</label>
            <input type="text" id="signup-name" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label htmlFor="signup-email">Email</label>
            <input type="email" id="signup-email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="signup-password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label htmlFor="signup-confirm">Confirm</label>
            <input type="password" id="signup-confirm" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}