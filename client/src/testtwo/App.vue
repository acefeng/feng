<template>
  <div id="app">
    测试{{msg}}asdffd321312djfasdfkh
    <input type="text"/>
    <img src="./assets/logo.jpg"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num: 1
    }
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

  .main {
    margin-left: 100px;
    background-color:rgb(242,242,242);
  }
}
</style>
