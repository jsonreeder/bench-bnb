import React from 'react';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  // TODO: Add methods
  // TODO: Add styling
  render() {
    return (
      <div>
        <form>
          <h2>Welcome to BenchBnb</h2>
          <label>
            Username:
            <input type='text'
            />
          </label>
          <br />
          <label>
            Password:
            <input type='password' />
          </label>
          <br />
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default SessionForm;