import React, { Component } from 'react'

 class Nav extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-dark bg-dark">
               <a className="navbar-brand" href="#" style={{fontFamily: "Lobster"}}>007</a>
            </nav>
            <h1 style={{textAlign:"center", fontFamily: "Lobster"}}>James Bond Movies</h1>
            </div>
        )
    }
}

export default Nav
