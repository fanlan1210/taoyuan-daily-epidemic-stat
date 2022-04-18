fetch('https://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm')
  .then(function(response) {
      if(!response.ok) throw new Error('Cannot fetch data!');
      return response.text();
  })
  .then();