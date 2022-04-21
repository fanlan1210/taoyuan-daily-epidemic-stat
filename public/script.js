const vm = Vue.createApp({
  data() {
    return {
      date: "00-00",
      total: "*",
      local: "*",
      remote: "*",
      taoyuan: "*",
      link: "#"
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
        this.date = data.date;
        this.total = data.total;
        this.local = data.local;
        this.remote = data.remote;
        this.taoyuan = data.area;
        this.link = data.link;
      });
    }
  },
  beforeMount(){
    this.fetchData();
  }
});

vm.mount('#app');
