import React, { Component } from 'react'

 class UserItem extends Component {
    render() {
        const { name , synopsis,  title, image} = this.props.user;
        return (
            <div className="container">
                <div className="card" style={{width: "18rem"}}>
                <img src={image} className="card-img-top" style={{width:"80%", height:"200px", margin:"0 auto"}} alt="..." />
                <ul className="list-group">
               <li className="list-group-item"><strong>Actor : {name}</strong></li>
               </ul>
                <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                 <p style={{textAlign:"justify"}} className="card-text">{synopsis}</p>
            </div>
            </div>
            </div>
        )
    }
}

export default UserItem

