<template>
              <div class="content_left left">
                <div class="every_day">
                    <span>每日一句</span>
                    <p>{{ content }}</p>
                </div>
                <div class="text_list">
                    <div 
                        v-for="text in textList"
                        class="text"
                        :key="text"
                    >
                        <p 
                            class="text_title"
                        >{{ text.title }}</p>
                        <!-- <a href="" class="text_title">{{ text.title }}</a> -->
                        <p class="text_content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ text.content }}</p>
                        <div class="text_foot">{{ text.views }}</div>
                    </div>
                </div>
            </div>
</template>




<script>
export default {
  data() {
    return {
      content:'你好呀',
      textList:'',
    }
  },
  created() {
    this.$http.get('/queryText').then(res => {
        console.log(res)
        this.textList = res;
    }).catch(function (error) {
      console.log(error);
  });
  },
}
</script>



<style scoped>

.every_day{
    width: 100%;
    /* text-align: left; */
    box-shadow: 3px 4px 3px #888;
    border-radius: 7px;
    padding: 10px 15px;
    height: 80px;
    background: white;
}
.every_day span{
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    color: cadetblue;
    /* color: slateblue; */
}
.every_day p{
    margin-top: 10px;
    margin-left: 20px;
}

.content_left{
    width: 100%;
    padding: 0 30px 0 0;
    box-sizing: border-box;
}
.text{
    background: white;
    display: inline-block;
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 2px 2px #888;
    overflow: hidden;
    text-align: left;
    margin-top: 30px;
    padding: 0 30px 0 0;
    /* height: 120px; */
}
.text_title{
    display: inline-block;
    font-size: 20px;
    text-decoration: none;
    color: #13102b;
    padding: 20px 10px 5px 10px;
    text-align: left;
}
.text_title:hover{
    color: #337ab7;
}
.text_content{
    font-size: 14px;
    color: #13102b;
    text-align: left;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 100px;
    margin: 12px 0 0 20px;
}
.text_foot{
    /* position: relative; */
    display: inline-block;
    color: #eee;
    background: #1f1f1f;
    width: 100%;
    padding: 5px 15px;
    font-size: 14px;
    /* bottom: 0px; */
}

</style>