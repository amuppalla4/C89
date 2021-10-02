import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends component{
constructor(props){
  super(props)
  this.state={
    light_theme:true
  }
}
componentDidMount(){
  let theme 
  firebase();
  .ref("users"firebase.auth().currentUID)
  .on({"value", function snapshot(params)}{
    
  })
  this.set.state(light_theme===light??:true:false) 
}

};

export default DrawerNavigator;
