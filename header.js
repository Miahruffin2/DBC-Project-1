
import React from 'react';

function Navbar () {
    return (
      <div>
          <nav>
                <a href="" className="name-nav">Jeremiah</a>
                <div className="logo">
                    <img src={require('./images/logo.png')} height="100px"/>
                </div>
                <a href="" className="name-nav">Ruffin</a>
            </nav>
      </div>
    );
  };
export default Navbar