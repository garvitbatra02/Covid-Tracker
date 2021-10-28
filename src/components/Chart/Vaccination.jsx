import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import Select from 'react-select'
import "./Vaccination.css"
export default class Vaccination extends Component {
    state={
        statesarray:[],
        totalindian1:[],
        totalindian2:[]
    }
    componentDidMount=async()=>{
        console.log("component mounted");
        let response=await fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
        let data=await response.json();
        console.log(data);
        

        let temparrayperstate1=[];
        let temparrayperstate2=[];
        for(const element in data){
        
            if(element=="TT"){
                continue;
            }
            if(element=='UN'){
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

            
            if(datedata[lastdate].total==undefined ){
                
                continue;
            }



            console.log(lastdate);
            const val=datedata[lastdate].total.vaccinated1;
            const val2=datedata[lastdate].total.vaccinated2;
           

            temparrayperstate1.push(val);
            temparrayperstate2.push(val2);
        
           
        }
        this.setState({totalindian1:temparrayperstate1});
        this.setState({totalindian2:temparrayperstate2});

        console.log(this.state.statesarray);
        console.log(this.state.totalindian1);
        console.log(this.state.totalindian2);

    }
    render() {
        return (
            <div>
                
              <div className="headingchart" style={{textAlign:"center",marginTop:"15vh",fontFamily: "'Montserrat', sans-serif",fontSize:"4vh"}}><b>Vaccination Statistics</b> of India  <img src="https://us.123rf.com/450wm/ylivdesign/ylivdesign1801/ylivdesign180100235/92624532-syringe-icon-cartoon-illustration-of-syringe-vector-icon-for-web.jpg?ver=6" alt="" width="50px"/>graphically</div>  

                <div className="mainchart" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div className="chart" style={{width:"75vw",position:"relative",top:"15vh"}}>
                    <Line data={{
                labels:this.state.statesarray,
                datasets:[
                {label:`vaccination dose 1`,
                data:this.state.totalindian1,
                lineTension: 0.3,
                fill: true,
                backgroundColor: "rgb(253, 160, 180,0.5)",
                borderColor: "#f76080",
                borderWidth: 1,
                pointRadius:3
                },
                {
                label:`vaccination dose 2`,
                data:this.state.totalindian2,
                lineTension: 0.3,
                fill: true,
                backgroundColor: "rgb(160, 110, 251,0.5)",
                borderColor: "#6f42c1",
                borderWidth: 1,
                pointRadius:3
                }

                ]

                }}/>
                </div>
                </div>

            </div>
        )
    }
}
