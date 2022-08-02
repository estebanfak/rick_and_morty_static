Vue.createApp({
  data() {
    return {
      characters: [],
      urlHome: "https://rickandmortyapi.com/api/character",
      nextBtn: "",
      prevBtn: "",
      url: "",
      data: ""
    }
  },

  created(){
    this.cargarDatos(this.urlHome)

  },

  methods: {
    cargarDatos(param){
      axios.get(param)
      .then(data=>{
        this.characters = data.data.results
        this.data = data.data.info
      })
    },
    btnprev(){
      if(this.data.prev != null){
        this.prevBtn = this.data.prev
      }     
      this.cargarDatos(this.prevBtn)
    },
    btnNext(){
      if(this.data.next != null){
        this.nextBtn = this.data.next
      }
      this.cargarDatos(this.nextBtn)
    }
  }
}).mount('#app')