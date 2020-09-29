<template>
    <div class="student-list">
        <div class="student-sum">学生总人数:{{ studentLength }}</div>
        <hr>
        <p>学生列表</p>
        <ul>
            <li 
                v-for="student in studentList"
                :key="student.id"
            >
                姓名：{{ student.name }} 年龄：{{ student.age }}
            </li>
        </ul>
        <hr>
        <p>未成年学生列表</p>
        <ul>
            <li 
                v-for="student in studentSmall"
                :key="student.id"
            >
                姓名：{{ student.name }} 年龄：{{ student.age }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed: {
        ...mapState(['studentList']),
        ...mapGetters(['studentLength','studentSmall'])
    },
}
</script>

<style scoped>
.student-list{
    margin-top: 20px;
}
.student-list ul li{
    margin-top: 10px;
}
</style>