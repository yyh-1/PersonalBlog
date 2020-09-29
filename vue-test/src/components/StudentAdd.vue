<template>
    <div class="student-add">
        <p>添加学生:</p>
        <div class="name">
            姓名：
            <input type="text" v-model="name">
        </div>
        <div class="age">
            年龄：
            <input type="text" v-model="age">
        </div>
        <button @click="handleClick()">添加</button>
        <hr>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            age:'',
        }
    },
    methods: {
        handleClick(){
            const { name,age } = this;
            this.$store.state.studentList.push({
                name,age,id:+new Date(),
            })
            this.name = '';
            this.age = '';
        }
    },
}
</script>

<style scoped>
.student-add .name{
    margin-top: 10px;
}
.student-add .age{
    margin-top: 10px;
}
button{
    margin-top: 10px;
}
</style>