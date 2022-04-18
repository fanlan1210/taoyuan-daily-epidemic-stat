const vm = Vue.createApp({
  data() {
    return {
      date: "00-00",
      total: "*",
      local: "*",
      remote: "*",
      taoyuan: "*"
    }
  },
  methods: {
    fetchData() {
      fetch('/stat-today')
      .then(function(response) {
          if(!response.ok) throw new Error('Cannot fetch data!');
          return response.json();
      })
      .then( (data)=>{
        this.total = data.todal;
        this.local = data.local;
        this.remote = data.remote;
        this.taoyuan = data.area;
      });
    }
  }
});

vm.mount('#app');