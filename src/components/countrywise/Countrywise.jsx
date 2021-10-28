import React, { Component } from 'react'
import Countrycard from './Countrycard'
import "./Countrywise.css"
export default class Countrywise extends Component {

    state={
        countrydata:[],
        text:"",
        current:""
    }
    componentDidMount=async ()=>{
        const response= await fetch("https://disease.sh/v3/covid-19/countries");
        let data=await response.json();
        this.setState({countrydata:data});
    }

     handleOnchange=(event)=>{
        // console.log("on change");
        if(event.target.value==""){
            this.setState({text:""});
        }
        this.setState({current:event.target.value});
       
    }
    clickbtn=()=>{
        this.setState({text:this.state.current})
    }
    render() {
        return (
            <div className="Countrywise">


      

                <div className="container-fluid mt-5">
                    <div className="main-heading text-center"  >
                        <div className="mb-5"> <b className="boldweight">World</b> covid-19 Dashboard</div>
                    </div>
                </div>



               
                <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" onChange={this.handleOnchange} value={this.state.current}/>
    
  </div>
  
  <div className="buttondiv">
  <button type="button" class="btn btn-danger" onClick={this.clickbtn}><img src="https://img.icons8.com/ios/50/000000/search--v1.png" width="20px" style={{color:"white"}}/>
    <i class="fas fa-search"></i>
  </button>
  </div>

     </div>   
     
     
     
     
                 <div className="countrycontent">

                        
                     {this.state.countrydata.map((element)=>{
                        

                        if(this.state.text==""){

                        return ( <Countrycard country={element.country} Cases={element.cases} Active={element.active} Recovered={element.recovered} Deaths={element.deaths} Tests={element.tests} flaglink={element.countryInfo.flag}/>
                        );
                        }
                        else if(element.country.toLowerCase().includes(this.state.text)){
                            return ( <Countrycard country={element.country} Cases={element.cases} Active={element.active} Recovered={element.recovered} Deaths={element.deaths} Tests={element.tests} flaglink={element.countryInfo.flag}/>
                        );
                        }

                    })} 
                    
                   
                    
                    
                   
                    </div>

                
            </div>
        )
    }
}
