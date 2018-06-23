import React, { Component } from 'react';
import Particles from 'react-particles-js';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Particles
              params={{
                  particles: {
                      line_linked: {
                          color: "#000000",
                      },
                      number:{
                          value:120,
                      },
                      shape:{
                          type:"circle",
                      },
                      move:
                          {
                              enable:true,
                              speed:6,
                          }
                  }
                  ,
                  interactivity: {
                      "detect_on": "canvas",
                      "events": {
                          "onhover": {
                              "enable": true,
                              "mode": "repulse"
                          },
                          "onclick": {
                              "enable": true,
                              "mode": "push"
                          },
                          "resize": true
                      },
                      "modes": {
                          "grab": {
                              "distance": 400,
                              "line_linked": {
                                  "opacity": 1
                              }
                          },
                          "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                          },
                          "repulse": {
                              "distance": 200,
                              "duration": 0.4
                          },
                          "push": {
                              "particles_nb": 4
                          },
                          "remove": {
                              "particles_nb": 2
                          }
                      }
                  },
                  detect_on:"canvas",
              }}
              style={{
                  width: '100%',
              }}
          />

      </div>
    );
  }
}

export default App;
