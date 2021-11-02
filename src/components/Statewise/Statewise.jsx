import React, { Component } from 'react'

export default class Statewise extends Component {

state={
    statewisedata:[]
}

fetchcovidata= async()=>{
    let response= await fetch("https://data.covid19india.org/data.json");
    let data=await response.json();
   console.log(data.statewise);
   return data;
}



 componentDidMount= async ()=>{
     this.fetchcovidata().then((data)=>{this.setState({statewisedata:data.statewise})});
     
  
}


    render() {
        return (
            <div>
                <div className="container-fluid mt-5">
                    <div className="main-heading text-center"  >
                        <div className="mb-5"> <img src="https://hotemoji.com/images/dl/f/flag-of-india-emoji-by-twitter.png" alt="" width="50px"/><b className="boldweight"> India</b> covid-19 Dashboard</div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>active</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                             {this.state.statewisedata.map((element)=>{

                                if(element.state!=="State Unassigned"){
                                    if(element.state!=="Total"){

                    return (   
                        <tr>
                                <td>{element.state}</td>
                                <td>{element.confirmed}</td>
                                <td>{element.recovered}</td>
                                <td>{element.deaths}</td>
                                <td>{element.active}</td>
                               
                            </tr>
                            
                    )
                             }}
                    return (<tr></tr> )

                })}
                </tbody>
                        
                    </table>
                </div>
               
            </div>
        )
    }
}

