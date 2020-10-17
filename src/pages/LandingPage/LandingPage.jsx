import React, { Component } from "react";
import './style.css';

export default class LandingPage extends Component {
  render() {
    return (
        <div className="landing-page">
          <header>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <a className="navbar-brand" href="#">Petgram</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mr-5" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link " href="#" style={{border: '1px solid',borderRadius:'16px'}}>Register</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main>

        </main>
        <footer className="fixed-bottom">
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </footer>
        </div>
    );
  }
}
