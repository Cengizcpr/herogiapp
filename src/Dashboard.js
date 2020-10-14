import React, { Component } from "react";
import users from "./users.json";
import pace from "./pace.json";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      users,
      pace,
      advancedSpeedState:[],
      ageGroup:[]
    };
  }
  componentDidMount() {
    //Advanced Speed
    const distance=[];
    const total_time=[];
    const advancedSpeed=[];
    for(var i=0;i<this.state.pace.length;i++){
      distance[i]=(this.state.pace[i].distance/1000);
     total_time[i]=this.state.pace[i].total_time;
      advancedSpeed[i]=distance[i]/total_time[i];
    } 
   this.setState({
     advancedSpeedState:advancedSpeed
   })
   //Age Group
   const groupAge=[];
   for(var i=0;i<this.state.users.length;i++){
     if(this.state.users[i].age>=20 && this.state.users[i].age<30){
       groupAge[i]="Grup1"
     }
     else if(this.state.users[i].age >=30 && this.state.users[i].age<40){
      groupAge[i]="Grup2"
    }
   else if(this.state.users[i].age>=40 && this.state.users[i].age<60){
      groupAge[i]="Grup3"
    }
   }
   this.setState({
    ageGroup:groupAge
  })
  }
  render() {
    var advancedSpeedPrint = this.state.advancedSpeedState.map((value) => (
      <tr>
        <td>{value}km/dk</td>
       
      </tr>
    ));
    var ageGroupPrint = this.state.ageGroup.map((value) => (
      <tr>
        <td>{value}</td>
       
      </tr>
    ));
    var userList = this.state.users.map((value) => (
      <tr>
        <th scope="row">{value.id}</th>
        <td>{value.name}</td>
        <td>{value.sex}</td>
        <td>{value.age}</td>
      </tr>
    ));
    var paceList = this.state.pace.map((value) => (
      <tr>
        <td>{value.total_time}dk</td>
        <td>{value.distance}m</td>
        
      </tr>
    ));

    return (
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-1">
                <div className="col-md-4">
                  <table class="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Adı</th>
                        <th scope="col">Cinsiyet</th>
                        <th scope="col">Yaş</th>
                      </tr>
                    </thead>
                    <tbody>{userList}</tbody>
                  </table>
                </div>{" "}
                <div className="col-md-2">
                  <table class="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col"> Ortalama Hız(km/dk)</th>
                      </tr>
                    </thead>
                    <tbody>{advancedSpeedPrint}</tbody>
                  </table>
                </div>
                <div className="col-md-2">
                  <table class="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col"> Grup</th>
                      </tr>
                    </thead>
    <tbody>{ageGroupPrint}</tbody>
                  </table>
                </div>
                <div className="col-md-4">
                  <table class="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Zaman(dk)</th>
                        <th scope="col">Mesafe(m)</th>
                        
                      </tr>
                    </thead>
                    <tbody>{paceList}</tbody>
                  </table>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    );
  }
}
export default Dashboard;
