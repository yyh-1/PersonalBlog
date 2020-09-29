<template>
  <div id="app">

    <div class="header">
            <div class="container">
                <p href="" class="title left">我的个人博客 | 技术博客</p>
                <!-- <ul>
                    <li 
                        v-for="header in headerList"
                        :key="header.id"
                        class="header-list left"
                    ><a :href="header.url">{{ header.title }}</a></li>
                </ul> -->
                <ul>
                  <router-link to="/home">首页</router-link>
                  <router-link to="/sitemap">地图</router-link>
                  <router-link to="/about">关于</router-link>
                  <router-link to="/guestbook">留言</router-link>
                </ul>
                <div class="search">
                    <input type="text" placeholder="输入关键词查找" v-model="filterText">
                    <button>搜索</button>
                </div>
                <div class="login left">
                    <button>登录</button>
                </div>
                <div class="register left">
                    <button>注册</button>
                </div>
            </div>
        </div>
    <div class="content">
      <div class="content_left">
        <router-view></router-view>
      </div>
            <!-- <div class="content_left left">
                <div class="every_day">
                    <span>每日一句</span>
                    <p>{{ content }}</p>
                </div>
                <div class="text_list">
                    <div 
                        v-for="text in newTextList"
                        class="text"
                    >
                        <p 
                            class="text_title"
                            v-on:click="textClick($event)"
                        >{{ text.title }}</p>
                        <p class="text_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ text.content }}</p>
                        <div class="text_foot">{{ text.views }}</div>
                    </div>
                </div>
            </div> -->
            <div class="content_right">
                <div class="right_top">
                    <div>随机标签云</div>
                    <a 
                        href="/" 
                        v-for="tag in textList"
                        :key="tag"
                        :style="{
                            color:randomColor(),
                            fontSize:randomSize(),
                        }"
                    >{{ tag.title }}</a>
                </div>
                <div class="right_middle">
                    <div>最近热门</div>
                    <ul>
                        <li
                            v-for="news in hotList"
                            :key="news.id"
                        >{{ news.content }}</li>
                    </ul>
                </div>
                <div class="right_foot">
                    <div>最新留言</div>
                    <ul>
                        <li
                            v-for="comment in sortnewComment"
                            :key="comment"
                        >
                            <div>
                                <span>{{ comment.username }}</span>
                                <span class="time">{{ comment.ctime }}</span>
                            </div>
                            <p>{{ comment.content }}</p>
                        </li>
                    </ul>
                </div>
                <div class="right_bottom">
                    <div>友情链接</div>
                    <a 
                            :href="link.url"
                            v-for="link in linkList"
                            :key="link"
                        >{{ link.content }}</a>
                </div>
            </div>
        </div> 


        <div class="footer">
            <ul>
                <li
                    v-for="type in language"
                    :key="type"
                    class="left"
                >{{ type }}</li>
            </ul>
            <p>Copyright @ 2010-2020 杨宇航的个人博客 All rights reserved 有免费开源的WordPress强力驱动 鲁ICP备14017955号站长统计</p>
        </div> 
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      headerList:[
        {
          title:"首页",
          id:"1",
        },
        {
          title:"地图",
          id:"2",
        },
        {
          title:"关于",
          id:"3",
        },
        {
          title:"留言",
          id:"4",
        },
      ],
      linkList:'',
      hotList:'',
      textList:'',
    }
  },
  methods: {
    // getAxios(){
    //   let _this = this;
    //     _this.$http.get('/queryLink').then(res => {
    //       console.log(res)
    //         this.linkList = res.data.data;
    //     }).catch(function (error) {
    //       console.log(error);
    //   });     
    // }
  },
  computed: {
                      randomColor(){
                    return function(){
                        let red = Math.random() * 255;
                        let green = Math.random() * 255;
                        let blue = Math.random() * 255;
                        return  "rgb(" + red + "," + green + "," + blue + ")";
                    }
                },
                randomSize(){
                    return function(){
                        let size = (Math.random() * 20 + 12) + "px";
                        return size;
                    }
                },
  },
  created() {
    console.log(this.$http)
    this.$http.get('/queryHots').then(res => {
        console.log(res)
        this.hotList = res;
    }).catch(function (error) {
      console.log(error);
  });
    this.$http.get('/queryLink').then(res => {
        console.log(res)
        this.linkList = res;
    }).catch(function (error) {
      console.log(error);
  });
      this.$http.get('/queryText').then(res => {
        console.log(res)
        this.textList = res;
    }).catch(function (error) {
      console.log(error);
  });

//   // //   axios.get('/queryLink').then(res => {
//   // //     console.log(res)
//   // //       this.linkList = res.data.data;
//   // //   }).catch(function (error) {
//   // //     console.log(error);
//   // // });
  },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

body{
    background-color: azure;
}
.left{
    float: left;
}
.right{
    float: right;
}
.header{
    width: 100%;
    height: 50px;
    background: #191818;
}

.container{
    position: relative;
    width: 1170px;
    height: 50px;
    margin: 0 auto;
    /* background: pink; */
}
.container ul{
    display: inline-block;
    margin-left: 50px;
}
.container  a{
    color: white;
    font-size: 14px;
    text-decoration: none;
    height: 50px;
    line-height: 50px;
    padding: 18px 15px;
}
.container ul .router-link-active{
  background: #fff;
  color: black;
  font-weight: bold;
}
.title{
    display: inline-block;
    color: #eee;
    line-height: 50px;
    text-decoration: none;
    margin:0px 15px;
    font-size: 18px;
}
.header-list{
    display: inline-block;
    color: #eee;
    line-height: 50px;
    list-style: none;
    height: 50px;
    width: 58px;
    font-size: 14px;
    text-align: center;
}

.search input{
    display: inline-block;
    position: absolute;
    height: 22px;
    padding: 5px 10px;
    border-radius: 8px;
    outline: none;
    border: 1px solid;
    font-size: 14px;
    top: 50%;
    margin-top: -18px;
    right: 300px;
    /* float: left; */
}
.search button{
    display: inline-block;
    position: absolute;
    width: 54px;
    height: 34px;
    padding: 5px 10px;
    border-radius: 8px;
    top: 50%;
    margin-top: -18px;
    outline: none;
    color: #555;
    right: 240px;
    background: #fff;
    /* float: left; */
}
.login button{
    display: inline-block;
    position: absolute;
    right: 60px;
    width: 54px;
    height: 34px;
    padding: 5px 10px;
    border-radius: 8px;
    top: 50%;
    margin-top: -18px;
    outline: none;
    color: #555;
    background: #fff;
}

.register button{
    display: inline-block;
    position: absolute;
    right: 0;
    width: 54px;
    height: 34px;
    padding: 5px 10px;
    border-radius: 8px;
    top: 50%;
    margin-top: -18px;
    outline: none;
    color: #555;
    background: #fff;
}




.content{
    display: inline-block;
    position: relative;
    width: 1170px;
    margin:30px auto 0 auto;
    left: calc(50% - 585px);
    /* background: blue; */
}
.content_left{
    width: 66%;
    padding: 0 30px 0 0;
    box-sizing: border-box;
}

.content_right{
    width: 29%;
    float: right;
}



.right_top{
    display: inline-block;
    width: 100%;
    background: #1f1f1f;
    color: white;
    border-radius: 10px;
    text-align: left;
    padding: 0px 15px 25px 15px;
    margin-bottom: 20px;
}
.right_top div{
    display: block;
    text-align: left;
    font-size: 14px;
    padding: 15px 5px 15px 0;
    color: dodgerblue;
}
.right_top a{
    display: inline-block;
    font-size: 14px;
    color: dodgerblue;
    margin-right: 5px;
    text-decoration: none;
}

.right_middle{
    display: inline-block;
    width: 100%;
    background: #1f1f1f;
    color: white;
    border-radius: 10px;
    text-align: left;
    padding: 0px 15px 25px 15px;
    margin-bottom: 20px;
}
.right_middle div{
    display: block;
    text-align: left;
    font-size: 14px;
    padding: 15px 5px 15px 0;
    color: dodgerblue;
}
.right_middle ul li{
    list-style: none;
    color: white;
    padding: 8px 0;
    text-decoration: none;
    font-size: 14px;
    border-bottom: 1px solid #292929;
}

.right_foot{
    display: inline-block;
    width: 100%;
    background: #1f1f1f;
    color: white;
    border-radius: 10px;
    text-align: left;
    padding: 0px 15px 25px 15px;
    margin-bottom: 20px;
}
.right_foot div{
    display: block;
    text-align: left;
    font-size: 14px;
    padding: 15px 5px 15px 0;
    color: dodgerblue;
}
.right_foot ul li{
    list-style: none;
}
.right_foot ul li div{
    padding: 5px 0;
}
.right_foot ul li div span{
    font-size: 14px;
    color: white;
}
.right_foot ul li div .time{
    position: absolute;
    right: 0;
}
.right_foot ul li p{
    font-size: 14px;
    color: #777;
}

.right_bottom{
    display: inline-block;
    width: 100%;
    background: #1f1f1f;
    color: white;
    border-radius: 10px;
    text-align: left;
    padding: 0px 15px 25px 15px;
    margin-bottom: 20px;
}
.right_bottom div{
    display: block;
    text-align: left;
    font-size: 14px;
    padding: 15px 5px 15px 0;
    color: dodgerblue;
}
.right_bottom a{
    display: inline-block;
    width: 50%;
    height: 30px;
    margin-top: 10px;
    text-decoration: none;
    color: white;
    line-height: 30px;
}







.footer{
    width: 100%;
    height: 60px;
    background: #191818;
    text-align: center;
    padding: 20px;
    margin-top: 150px;
}
.footer ul{
    display: inline-block;
    margin: 0 auto;
    text-align: center;
}
.footer ul li{
    display: inline-block;
    color: #a2a2a2;
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;
    text-align: center;
}
.footer p{
    margin-top: 10px;
    color: #a2a2a2;
    font-size: 12px;
}
</style>