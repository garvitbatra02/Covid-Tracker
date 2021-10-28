import React, { Component } from 'react'
import "./Home.css"
export default class Home extends Component {
    render() {
        return (
            <div className="mainhome" style={{display:"flex",justifyContent:"center",position:"relative",marginTop:"15vh"}}>
                <div className="imageleftside" style={{marginRight:"6vw",marginLeft:"6vw"}}>
                <img src="https://ostroda.salezjanie.pl/sites/default/files/styles/medium/public/aktualnosci/zdjecia/2018/08/1964046_1024x0r72_h638e6.png?itok=0ctX3fPC" alt="" width="320px"/>
                    
                </div>
                <div className="message" style={{justifyContent:"center",display:"flex",alignItems:"center"}}>
                    <div className="mainmessage" style={{fontSize:"35px"}}>Let's stay safe and fight against cor<span className="corona"> <img src="https://www.clipartmax.com/png/full/212-2125897_corona-virus-icon-banana-leaf-print-plates.png" alt="" width="50px" />
                    </span>na virus together
                    </div> 
                </div>
            </div>
        )
    }
}
