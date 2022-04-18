fetch('https://od.cdc.gov.tw/eic/covid19/covid19_tw_stats.csv')
  .then(function(response) {
      if(!response.ok) throw new Error('Cannot fetch data!');
      return response.text();
  })
  .then();