const Accelon=require("accelon2016");
require("./localestring");
const maincomponent = Accelon(
  {corpus:"yinshun",appname:"yinshun",
    address:"59p9.0301",
    tabs:["source","search","dictionary","config","toc"],
    topMargin:"0em",
    leftFlex:3,rightFlex:2} 
  }
);
module.exports=maincomponent;