import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

import "./Vaccination.css"
export default class Chart_india extends Component {

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
            // let statenameval=this.state.statename;


        //  this.setState({datesobject:data[statenameval].dates});

        let temparrayperstate=[];
        for(const element in data){
            // console.log(element);
            // const dateval=this.state.dates;
            // dateval.push(element);
            // let newarray=this.state.confirmedcases;
            // newarray.push(this.state.datesobject[element].total.confirmed);
            // this.setState({confirmedcases:newarray,dates:dateval});
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
            // let confirmedperstate=0;
            // let newdatearray=[];
      
            let lastdate;
            for (const dates in datedata) {
            //     // console.log(datedata[dates].total.confirmed);
                lastdate=dates;
                    
                   
                        
                    
            //     confirmedperstate+=datedata[dates].total.confirmed  ;
            //     temptotalindan.push(confirmedperstate);
              
                
            }

            
            if(datedata[lastdate].total===undefined){
                
                continue;
            }


            /************ */


            // var today = new Date();
            // var dd = String(today.getDate()-1).padStart(2, '0');
            // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            // var yyyy = today.getFullYear();
            
            // today = yyyy + '-' + mm + '-' + dd;



            
        

                /**** */

            // const d = new Date();
            // let text = d.toLocaleDateString();
            // text=text.replace("/",'-');
            // text=text.replace("/",'-');


            /**** */
            console.log(lastdate);
            const val=datedata[lastdate].total.confirmed;
            // temptotalindan.push(val)
            console.log(val);

            temparrayperstate.push(val);
            /****** */




            // console.log(element);
            // console.log(confirmedperstate);
            // console.log(this.state.totalindian)
            // console.log(confirmedperstate);
            // const newarray=this.addarrays(this.state.totalindian,confirmedperstate);
           
        }
        this.setState({totalindian:temparrayperstate});

        console.log(this.state.statesarray);
        

        // let demo=this.state.totalindian;

    //    for (let i = 0; i < demo.length; i++) {
    //        const element = demo[i];
    //        if(element==NaN){
    //         //    demo.splice(i,1,0);
    //         demo[i]=0;
    //        }
    //    }

      
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
            backgroundColor: "#fdc8d9",
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
