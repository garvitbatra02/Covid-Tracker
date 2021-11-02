import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

import "./Vaccination.css"
export default class Chartindia extends Component {

    state={
        statesarray:[],
        totalindian:[]
    }
   states=["Andaman and Nicobar Islands","Andhra Pradesh","	Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Dadra and Nagar Haveli","Goa","Gujarat","Himachal Pradesh","Haryana","Jharkhand","	Jammu and Kashmir","Karnataka","Kerala","Daman and Diu","Lakshadweep","Maharashtra","Meghalaya","Manipur","Madhya Pradesh","Mizoram","Nagaland","Orissa","Punjab","Puducherry","Rajasthan","Sikkim","Telangana","Tamil Nadu","Tripura","x   "];


    componentDidMount=async()=>{
        console.log("component mounted");
        let response=await fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
        let data=await response.json();
        console.log(data);
            

        let temparrayperstate=[];
        for(const element in data){
           
            if(element==="TT"){
                continue;
            }
            if(element==='UN'){
                
                continue;
            }
            let newstatearray=this.state.statesarray;
            newstatearray.push(element);
            this.setState({statesarray:newstatearray});



            const datedata=data[element].dates;
 
      
            let lastdate;
            for (const dates in datedata) {
           
                lastdate=dates;
                    
                   
                        
           
              
                
            }

            
            if(datedata[lastdate].total===undefined){
                
                continue;
            }


            
            console.log(lastdate);
            const val=datedata[lastdate].total.confirmed;
            
            console.log(val);

            temparrayperstate.push(val);
          



           
        }
        this.setState({totalindian:temparrayperstate});

        console.log(this.state.statesarray);   
        console.log(this.state.totalindian);

    }
    render() {
        return (
            <>

              <div className="headingchart" style={{textAlign:"center",marginTop:"15vh",fontFamily: "'Montserrat', sans-serif",fontSize:"4vh"}}><b>Cases per state</b> of India  <img src="https://hotemoji.com/images/dl/f/flag-of-india-emoji-by-twitter.png" alt="" width="50px"/>graphically</div>  

            <div className="mainchart" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="chart" style={{width:"75vw",position:"relative",top:"15vh"}}>
                <Line data={{
        labels:this.state.statesarray,
        datasets:[
            {label:`Cases of all states`,
            data:this.state.totalindian,
            lineTension: 0.3,
            fill: true,
            backgroundColor: "rgb(253, 200, 217,0.5)",
            borderColor: "red",
            borderWidth: 1,
            pointRadius:3
        },
           
        ]

    }}/>
            </div>
            </div>
            </>
        )
    }
}
