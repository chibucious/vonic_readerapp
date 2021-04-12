import React from "react";
import Login from "./login";

//import the AppContainer as Navigator which contains the screens in Login Stack
import Navigator from "./routes/loginStack";


export default function App(){
  return(
    <Navigator />
  );
}
