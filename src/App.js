import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
  }

  handleChange = (e) => {
    // name = odczytuję name z inputa, np. email i na tej podstawie ustawiam stan
    const name = e.target.name;
    const type = e.target.type;

    if (type === "checkbox") {
      const isChecked = e.target.checked;

      // uzywam nawiasow kwadratowych bo przekazuje zmienna jako parametr
      this.setState({
       [name]: isChecked,
      })
    } else {
      this.setState({
        [name]: e.target.value,
      })
    }
    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
  }

  render() {
    return (
      <div className="App">
        <form onSubmit= {this.handleSubmit} noValidate>
          <label htmlFor="user">Imię:
          <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>

          <label htmlFor="email">Email:
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label htmlFor="password">Hasło:
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>

          <label htmlFor="accept">
          <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} /> Akceptuję regulamin.
          </label>

          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default App;
 