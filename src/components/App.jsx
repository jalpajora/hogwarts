import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { House } from './House';
import { Spells } from './Spells';
import { SortingHat } from './SortingHat';
import { Houses } from './Houses';
import LogoImg from '../styles/images/logo.png';

class App extends Component {
  state = {
    house: '',
  };

  handleSortingHat = (house) => {
    this.setState({ house });
  }

  linkToSortedHouseBtn(house) {
    return (
      <Link to={`/hogwarts/houses/${house}`}>
        <button className="button">{`Explore ${house} now!`}</button>
      </Link>
    )
  }

  renderComponents(house) {
    return (
      <Router>
        <div className="header">
          <div className="logo">
            <Link to="/hogwarts">
              <img src={LogoImg} width="90px" height="30px" alt="Hogwarts" />
            </Link>
          </div>
          <ul className="menu">
              <li>
                <Link to={`/hogwarts/houses/${house}`}>{house && house}</Link>
              </li>
              <li>
                <Link to="/hogwarts/houses">Houses</Link>
              </li>
              <li>
                <Link to="/hogwarts/spells">Spells</Link>
              </li>
            </ul>
        </div>
        <div className="content">
          <Switch>
              <Route exact path="/hogwarts/houses">
                <Houses />
              </Route>
              <Route exact path={`/hogwarts/houses/${house}`}>
                <House house={house} />
              </Route>
              <Route path="/hogwarts/spells">
                <Spells />
              </Route>
              <Route exact path="/hogwarts">
                <SortingHat
                  onJoin={this.handleSortingHat}
                  linkToSortedHouseBtn={this.linkToSortedHouseBtn}
                />
              </Route>
          </Switch>
        </div>
      </Router>
    )
  }

  getHouse() {
    const { house } = this.state;
    const history = createBrowserHistory();
    if (house === ''
      && history.location.pathname
      && history.location.pathname.includes('/houses/')) {
        const path = history.location.pathname.split('/');
        return path[path.length - 1];
    }

    return house;
  }

  render(){
    const house = this.getHouse();
    const theme = house.toLocaleLowerCase();

    return (
      <div className={`hogwarts hogwarts--${theme}`}>
        {this.renderComponents(house)}
      </div>
    );
  }
}

export default App;
