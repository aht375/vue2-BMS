<template>
    <div>
        <h1></h1>
        <el-container>
            <el-aside width="auto">
                <div><CommonAside/></div>
            </el-aside>
            <el-container>
                <el-header><CommonHeader/></el-header>
                <CommonTag/>
                <el-main>
                    <!-- 路由出口 路由组件渲染至此-->
                    <router-view>

                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>
<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag   from '../components/CommonTag.vue'

export default {
    data() {
        return {}
    },
    components:{
        CommonAside,
        CommonHeader,
        CommonTag
    }
}
</script>
<style scoped>
.el-header{
    padding: 0;
}
</style>