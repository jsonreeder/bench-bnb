import React from 'react';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.logIn(user);
  }

  // TODO: Add methods
  // TODO: Add styling
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <h2>Welcome to BenchBnb</h2>
          <label>
            Username:
            <input type='text'
              onChange={this.update('username')}
             />
          </label>
          <br />
          <label>
            Password:
            <input type='password'
              onChange={this.update('password')}
            />
          </label>
          <br />
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
