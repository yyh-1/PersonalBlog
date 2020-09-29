<template>
 <div class="content_left left">
                <div class="guest">留言板</div>
                <div class="description">
                    <!-- <p>bbbbbbbbbbbbbbbbbbbb</p>
                    <p>bbbbbbbbbbbbbbbbbbbb</p>
                    <p>bbbbbbbbbbbbbbbbbbbb</p> -->
                    <textarea name="" v-model="commentText"></textarea>
                </div>
                <button class="submit" @click="putClick">发表留言</button>
                <div class="blog_comments">
                    <span class="blog_comments_msg">关于：目前有{{ commentLength }}条留言</span>
                    <div 
                        class="blog_comment"
                        v-for="comment in commentsList"
                        :key="comment"
                    >
                        <span><b>{{ comment.username }}</b>发表于：{{ comment.ctime }}</span>
                        <div>{{ comment.content }}</div>
                    </div>
                </div>
           </div>
</template>


<style scoped>
/* .description{
    background: white;
    width: 96%;
    border-radius: 5px;
    padding: 10px 15px 20px 15px;
    box-shadow: 3px 4px 3px #888;
    text-align: left;
} */
.guest{
    font-size: 18px;
    letter-spacing: 4px;
    /* font-weight: bold; */
}
.description{
    margin-top: 10px;
}
.description textarea{
    width: 96%;
    height: 100px;
    border-radius: 5px;
    /* margin-top: 15px; */
    padding: 5px;
    font-size: 14px;
}
.submit{
    display: inline-block;
    position: absolute;
    left: 52%;
    margin-top: 10px;
    width: 108px;
    height: 34px;
    padding: 5px 10px;
    border-radius: 8px;
    background: #fff;
    color: #555;
    outline: none;
}

.blog_comments{
    width: 100%;
    /* background: pink; */
}
.blog_comments_msg{
    margin-top: 10px;
    padding: 10px;
    display: inline-block;
    width: 100%;
    text-align: left;
}
.blog_comment{
    width: 95%;
    background: #d9edf7;
    border: 1px dashed #7ca4c1;
    padding: 10px 10px 20px 10px;
    margin-top: 10px;
    color: #31708f;
}
.blog_comment span{
    display: inline-block;
    width: 100%;
    padding-left: 10px;
}
.blog_comment div{
    display: inline-block;
    width: 100%;
    padding-left: 10px;
    margin-top: 10px;
}
</style>

