import React, { Component } from 'react'
import "./Indiasummary.css"
export default class Indiasummary extends Component {

    state={
        totaldata:{}
    }

    componentDidMount=async ()=>{
       let fetchdata= await fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
       let data=await fetchdata.json();

       let recentdate;
        for (const element in data["TT"].dates) {
            recentdate=element;
        }



       this.setState({totaldata:data["TT"].dates[recentdate].total});
        // console.log(this.state.totaldata);
    }


    render() {
        return (
            <div className="mainbody" style={{marginBottom:"18vh"}}>
            
               
              {/* <img src="https://cdn.mos.cms.futurecdn.net/Rc3HBZyZDFLZR5VY6dd2LA.jpg" alt="" width="25px"/> */}
                <div className="text-center my-4">
                <div className="tophead">
                <img src="https://cdn.mos.cms.futurecdn.net/Rc3HBZyZDFLZR5VY6dd2LA.jpg" alt="" width="20px"/>
                <h3 style={{marginLeft:"0.5vw"}}>live now</h3> 
                </div>
               
           
                <h2>COVID-19 TRACKER</h2>
                </div>

                <section style={{marginTop: "10vh"}}>
                <div className="cardconatiner" >
                    <div className="card" id="purple">
                        <div className="cardhead my-2" style={{textAlign:"center"}}>
                        our<span className="headingformatted"> COUNTRY</span> 
                            </div>

                        <div className="content my-1">
                        <div className="data">
                            INDIA
                        </div>
                    </div>
                    </div>
                    <div className="card" id="green">
                        <div className="cardhead my-2" style={{textAlign:"center"}}>
                        TOTAL<span className="headingformatted"> RECOVERED</span> 
                            </div>

                        <div className="content my-1">
                        <div className="data">
                        {this.state.totaldata.recovered}
                        </div>
                    </div>
                    </div>

                    <div className="card" id="yellow">
                        <div className="cardhead my-2" style={{textAlign:"center"}}>
                        TOTAL<span className="headingformatted"> CONFIRMED</span> 
                            </div> 

                        <div className="content my-1">
                        <div className="data">
                        {this.state.totaldata.confirmed}
                        </div>
                    </div>
                    </div>


                    <div className="card" id="orange">
                        <div className="cardhead my-2" style={{textAlign:"center"}}>
                        TOTAL<span className="headingformatted"> DEATH</span> 
                            </div>

                        <div className="content my-1">
                        <div className="data">
                        {this.state.totaldata.deceased}
                        </div>
                    </div>
                    </div>

                    <div className="card" id="violet">
                        <div className="cardhead my-2" style={{textAlign:"center"}}>
                        TOTAL<span className="headingformatted"> TESTED</span> 
                            </div>

                        <div className="content my-1">
                        <div className="data">
                        {this.state.totaldata.tested}
                        </div>
                    </div>
                    </div>

                    <div className="card" id="camel">
                        <div className="cardhead my-2" style={{textAlign:"center"}}>
                        TOTAL<span className="headingformatted"> VACCINATED</span> 
                            </div>

                        <div className="content my-1">
                        <div className="data">
                        {this.state.totaldata.vaccinated1+this.state.totaldata.vaccinated2}
                        </div>
                    </div>
                    </div>


                </div>
               
                </section>
            </div>
        )
    }
}
