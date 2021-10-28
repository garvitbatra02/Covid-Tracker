import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import Select from 'react-select'
export default class Statechart extends Component {
     
    state={
        dates:[],
        datesobject:{},
        confirmedcases:[],
        totalindian:[],
        statename:"DL"
    }
    componentDidMount=async()=>{
        console.log("component mounted");
        let response=await fetch("https://data.covid19india.org/v4/min/timeseries.min.json");
        let data=await response.json();

            let statenameval=this.state.statename;


         this.setState({datesobject:data[statenameval].dates});
        for(const element in this.state.datesobject){

            const dateval=this.state.dates;
            dateval.push(element);
            let newarray=this.state.confirmedcases;
            newarray.push(this.state.datesobject[element].total.confirmed);
            this.setState({confirmedcases:newarray,dates:dateval});
        }
      console.log(this.state.dates);
      console.log(this.state.confirmedcases);
        
    }

   



    // data={
    //     labels:this.state.dates,
    //     datasets:[
    //         {label:'sales for 2020 (M)',
    //         data:this.state.confirmedcases,
    //         lineTension: 0.3,
    //         fill: true,
    //         backgroundColor: "#fdc8d9",
    //         borderColor: "red",
    //         borderWidth: 1
    //     },
           
    //     ]

    // }

    statelist=[
        {
            value:'AN',
            label:'AN'
        },
        {
            value:'UP',
            label:'UP'
        },
        {
            value:'UK',
            label:'Uttrakhand'
        },
        {
            value:'RJ',
            label:'Rajasthan'
        }
    ];

    ddhandler=(event)=>{
        
        this.setState({statename:event.label});
        this.componentDidMount();
    }


    render() {
        return (


                <>

            <div className="selection" style={{width:'20vw',height:"5vh"}}>
            <Select options={this.statelist} onChange={this.ddhandler}/>
            </div>

            <div className="mainchart" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div className="chart" style={{width:"60vw",position:"relative",top:"15vh"}}>
                <Line data={{
        labels:this.state.dates,
        datasets:[
            {label:`${this.state.statename}`,
            data:this.state.confirmedcases,
            lineTension: 0.3,
            fill: true,
            backgroundColor: "#fdc8d9",
            borderColor: "red",
            borderWidth: 1,
            pointRadius:1.5
        },
           
        ]

    }}/>
            </div>
            </div>
            </>
        )
    }
}
