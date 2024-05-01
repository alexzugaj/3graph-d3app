import React, { Component } from "react";
import * as d3 from "d3";
import tips from './data/tips.csv';
import './App.css';
import Child1 from "./Child1"
import Child2 from "./Child2"
import Child3 from "./Child3"

class App extends Component {
  constructor(props){
    super(props)
    this.state={data:[]};
    }
  
  
  componentDidMount() {
    var self=this
    d3.csv(tips,function(d){
      return{
        tip:parseFloat(d.tip),
        total_bill:parseFloat(d.total_bill),
        size:parseInt(d.size),
        day:d.day,
        smoker:d.smoker,
        time:d.time,
        sex:d.sex
      }
    }).then(function(csv_data){
      self.setState({data:csv_data})
      //console.log(csv_data)
    })
    .catch(function(err){
      console.log(err)
    })
  }

  componentDidUpdate() {
    console.log(this.state.data);
    //var c = chroma.scale(["tomato", "white", "steelblue"]).domain([extent[0], 0, extent[1]]);
  }

  render() {
    const {data} = this.state;
    return (
      <div className='parent'>
        <div className='child1'><Child1 data1={this.state.data}></Child1></div>
        <div className='child2'><Child2 data2={this.state.data}></Child2></div>
        <div className='child3'><Child3 data3={this.state.data}></Child3></div>
      </div>
    );
  }
}

export default App;
