fetch('https://www.cdc.gov.tw/RSS/RssXml/Hh094B49-DRwe2RR4eFfrQ?type=1')
  .then(function(response) {
      if(!response.ok) throw new Error('Cannot fetch data!');
      return response.text();
  })
  .then();