import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      password: false,
      accept: true,
    }
  }

  warnings = {
    username_incorrect: "Nazwa nie może zawierać spacji i musi być dłuższa niż 2 litery",
    email_incorrect: "Email musi zawierać @",
    password_incorrect: "Hasło musi być dłuższe niż 5 znaków",
    accept_incorrect: "Zakceptuj regulamin.",
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
          {/* && - skrócony zapis ifa ? , oznacza, ze to co jest za && wykona sie tylko kiedy jest true.
          tzn jezeli jest error w state (true), to pokaze komunikat o bledzie */}
          {this.state.errors.username && <span>
          {this.warnings.username_incorrect}</span>}
          </label>

          <label htmlFor="email">Email:
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          {this.state.errors.email && <span>
          {this.warnings.email_incorrect}</span>}
          </label>

          <label htmlFor="password">Hasło:
          <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
          {this.state.errors.password && <span>
          {this.warnings.password_incorrect}</span>}
          </label>

          <label htmlFor="accept">
          <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} /> Akceptuję regulamin.
          </label>
          {this.state.errors.accept && <span>
          {this.warnings.accept_incorrect}</span>}

          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default App;
 