import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import TestComponent from './TestComponent';
import './App.css';
const options = [
  { id:1, name: "360 Behavioral Health HR Support",email:"360bhhrsupport@qs2500.com",group:"360 Behavioral Health" },
  { id:2, name: "Albero HR Support",email:"AKAHRSupport@qs2500.com",group:"Albero - Retirement Plans"},
  { id:3, name: "Alcoa HR Support",email:"alcoahrsupport@qs2500.com",group:"Alcoa - Other" },
  { id:4, name: "CLC Contractors HR Support",email:"clccontractorshrsupport@qs2500.com",group:"Quantum" },
  { id:5, name: "Garnet Ford HR Support",email:"GarnetFordHRSupport@QS2500.com",group:"Garnet Ford - Retirement Plan" },
  { id:6, name: "Garnet VW HR Support",email:"GarnetVWHRSupport@QS2500.com",group:"Garnet VW - Retirement Plan" },
  { id:7, name: "Hill Wallack HR Support",email:"hillwallackhrsupport@qs2500.com",group:"Hill Wallack - Other"},
  { id:8, name: "Miller Brothers HR Support",email:"millerbrothershrsupport@qs2500.com",group:"Quantum" },
  { id:9, name: "Quantum HR Support",email:"quantumhrsupport@qs2500.com",group:"Quantum - Other"},
  { id:10, name: "Quantum Strategies",email:"QuantumHR@qs2500.com",group:"SERV - Retirement Plans" },
  { id:11, name: "Retirement Plans",email:"retirementplans@qs2500.com",group:"Retirement Plans" },
  { id:12, name: "SB Conrad HR Support",email:"sbconradhrsupport@qs2500.com",group:"Quantum" },
  { id:13, name: "Sheltering Arms - Recruiting",email:"shelteringarmsrecruiting@qs2500.com",group:"Sheltering Arms - Recruiting" },
  { id:14, name: "Sheltering Arms HR Support",email:"shelteringarmshrsupport@qs2500.com",group:"Sheltering Arms - Other" },
  { id:15, name: "Stell HR Support",email:"StellHRSupport@QS2500.com", group:"Stell - Retirement Plan"},
  
 
];

class OptionsMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      options : [
        { id:1,  label: "360 Behavioral Health HR Support",name: "360 Behavioral Health HR Support",email:"360bhhrsupport@qs2500.com",group:"360 Behavioral Health",value:1 },
        { id:2, label: "Albero HR Support",name: "Albero HR Support",email:"AKAHRSupport@qs2500.com",group:"Albero - Retirement Plans",value:2},
        
       
        
       
      ],
      id:"",
      name:"",
      email:"",
      group:"",
      showComponent:false,
    }
  }

  




  // async getOptions(){
  //     const res=await axios.get('https://jsonplaceholder.typicode.com/users');
  //     const data= res.data;
  //     const options = data.map(d => ({
  //        "value":d.id,
  //        "label":d.name
  //     }))
  //     this.setState({selectOptions: options})
  // }

 
  

  handleChange(e){
     this.setState({id:e.id, name:e.name,email:e.email,group:e.group})
     
  }

  // componentDidMount(){
  //   this.getOptions();
  // }
  onSubmit = (e) => {
    e.preventDefault();
  
    this.setState({showComponent:true});
}
  render(){
     console.log(this.state.options)
     return(
            <div>

               <form onSubmit={this.onSubmit}>
               <Select options={this.state.options} onChange={this.handleChange.bind(this)} />
               
                <button>Submit</button>
               </form>
               {this.state.showComponent && <TestComponent name={this.state.name} email={this.state.email} id={this.state.id} group={this.state.group}/>}
           </div>
                
           
          
     )
  }
}


export default OptionsMenu;
