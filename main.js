var app = new Vue ({
  el: '#root',
  data:{
    disks: [],
    genere:'',
  },
  mounted () {
    this.album();
  },
  methods:{
    album: function () {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((response) => {
        this.disks = response.data.response;
        });
    }
  },
})