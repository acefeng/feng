<template>
  <div id="app">
    测试{{msg}}daskjhfkaksjhfjkhasddsd2s
    <input type="text"/>
    <i-input :value.sync="value" placeholder="请输入..." style="width: 300px"></i-input>
    <Icon type="navicon-round"></Icon>
     <i-button type="primary" shape="circle" icon="ios-search"></i-button>
    <img src="./assets/logo.jpg"/>
    <img src="./assets/DSC02661.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Youasdfasdfr Vue.js App',
      num: 1,
      value: ''
    }
  },
  mounted () {
    console.log(`
    ${12312312123}
    `);
  },
  methods: {
   
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica,STHeiti,Microsoft YaHei,Verdana,Arial,Tahoma,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: red;
  .main {
    margin-left: 100px;
    background-color:rgb(242,242,242);
  }
}
</style>
