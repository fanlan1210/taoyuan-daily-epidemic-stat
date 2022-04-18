const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.static("public"));

app.get("/stat-today", (req, res)=>{
  axios.get('https://www.cdc.gov.tw/RSS/RssXml/Hh094B49-DRwe2RR4eFfrQ?type=1')
    .then( (data)=>{
      res.set('Content-Type', 'text/xml');
      res.send(data.data);
    })
    .catch( (err)=>{console.log(err);} )
});

app.listen(process.env.PORT, ()=>{
  console.log("server starting on port: " + process.env.PORT);
});