import React from "react";
import ReactDOM from "react-dom";
import"./index.css";
let date = new Date();
date = date.getHours();
let greeting='';
let style={};
if(date>=1&&date<12)//raat k 1 s din k 12//
{
greeting='Good Morning'
style.color='orange';

}
else if(date>12&&date<20){
    greeting='Good Evening';
    style.color='blue'
}
else{
    greeting='Good Night';
    style.color='black'
}


ReactDOM .render(
    <div>
    <h1>Hello Sir,<span style={style}>{greeting}</span></h1>

</div>,
    document.getElementById('root')
);
