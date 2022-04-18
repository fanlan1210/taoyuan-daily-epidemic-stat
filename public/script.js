fetch('/today-stat')
  .then(function(response) {
      if(!response.ok) throw new Error('Cannot fetch data!');
      return response.json();
  })
  .then();

const vm = Vue.createApp({
  data() {
    return {
      
    }
  }
});