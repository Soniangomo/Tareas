import React, { Component } from 'resact';
const mysql = require("mysql");
class Contacto{
   constructor(oConfig){
       this.oConfig = oConfig;
   }

   addtask(title,responsible,description,priority){
       var con = mysql.createConnection(this.oConfig);
       con.connect(function(error){
           try{
               if(error){
                   console.log("error al establecer conexion a la DB --" + error);
               }else{
                   console.log("conexion exitosa");
               }

           }catch(x){
               console.log("contacto.addtask.connect --Error--" + x);
           }
       });
   }
}
export default contacto;