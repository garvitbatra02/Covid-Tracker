import React, { Component } from 'react'

export default class Countrycard extends Component {
    render() {
        return (
            <div style={{marginBottom:"55vh"}}>
                <div className="card" style={{width: "18rem"}}>
  <img src={this.props.flaglink} className="card-img-top" alt="..." style={{border:"1px solid black"}}/>
  <div className="card-body">
    <h5 className="card-title text-center">{this.props.country}</h5>
    <div className="card-text" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
    <p style={{fontFamily:"'Nunito Sans', sans-serif",margin:"0.5vh"}}><b>Tests </b> - {this.props.Tests}</p>
    <p style={{fontFamily:"'Nunito Sans', sans-serif",margin:"0.5vh"}}><b>Cases </b> - {this.props.Cases}</p>
    <p style={{fontFamily:"'Nunito Sans', sans-serif",margin:"0.5vh"}}><b>Active </b> - {this.props.Active}</p>
    <p style={{fontFamily:"'Nunito Sans', sans-serif",margin:"0.5vh"}}><b>Recovered </b> - {this.props.Recovered}</p>
    <p style={{fontFamily:"'Nunito Sans', sans-serif",margin:"0.5vh"}}><b>Deaths </b> - {this.props.Deaths}</p>
    </div>
  </div>
</div>
            </div>
        )
    }
}
