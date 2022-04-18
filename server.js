const express = require("express");
const axios = require("axios");
const { XMLParser } = require("fast-xml-parser");

const app = express();
app.use(express.static("public"));

app.get("/stat-today", (req, res)=>{
  axios.get('https://www.cdc.gov.tw/RSS/RssXml/Hh094B49-DRwe2RR4eFfrQ?type=1')
    .then( (data)=>{
      const parser = new XMLParser();
      let jObj = parser.parse(data.data);

      let re = /新增([0-9,]+)例COVID-19確定病例，分別為([0-9,]+)例本土及([0-9,]+)例境外移入/;
      const item = jObj.rss.channel.item
      for(let i=0;i<item.length;i++){
        let found = item[i].title.match(re);
        if(found.length>0) break;
      }
    
      //res.set('Content-Type', 'application/json');
      res.json({status:"OK"});
    })
    .catch( (err)=>{console.log(err);} )
});

app.listen(process.env.PORT, ()=>{
  console.log("server starting on port: " + process.env.PORT);
});