<template>
  <div id="app">

    <div class="nav-box">
      <div class="logo-header" @click="handleClick">我的个人博客 | 技术博客</div>
      <!-- <router-link to="/home" tag="div" class="logo">渡一教育</router-link> -->

      <div class="nav-list">
            <router-link to="/home">首页</router-link>
            <router-link to="/sitemap">地图</router-link>
            <router-link to="/about">关于</router-link>
            <router-link to="/guestbook">留言</router-link>
      </div>
      <div class="search">
            <input type="text" placeholder="输入关键词查找" v-model="filterText">
            <button>搜索</button>
      </div>      
    </div>
    <div class="container">
        <router-view></router-view>
    </div>


  </div> 



</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
    handleClick () {
      // push 
      this.$router.push('/home');
      // replace
      // this.$router.replace('/home');
      // go
      // this.$router.go(0);
      // console.log(this.$route);
    }
  },
}
</script>

<style scoped>
.nav-box {
  display: flex;
  /* justify-content: space-between; */
  height: 50px;
  line-height: 50px;
  background-color: #191818
}
.nav-box .logo-header {
  color: #fff;
  font-size: 18px;
}
.nav-list{
  padding: 0 80px;
}
.nav-list a {
  /* margin-left: 40px; */
  padding: 18px 20px;
  color: #fff;
  text-decoration: none;
}
.nav-list a.router-link-active {
  font-weight: bold;
  color: black;
  background: #fff;
}
.container {
  margin-top: 60px;
  width: 48%;
}
.nav-box,
.container {
  padding-left: 200px;
  padding-right: 200px;
}

.search input{
    display: inline-block;
    position: absolute;
    margin-top: 9px;
    height: 22px;
    padding: 5px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid;
    font-size: 14px;
    right: 300px;
    /* float: left; */
}
.search button{
    display: inline-block;
    position: absolute;
    margin-top: 9px;
    width: 54px;
    height: 34px;
    padding: 5px 10px;
    border-radius: 8px;
    outline: none;
    color: #555;
    right: 240px;
    background: #fff;
    /* float: left; */
}



</style>