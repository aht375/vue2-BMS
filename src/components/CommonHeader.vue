<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px;" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb class="breadcrumb" separator="-">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path:item.path }">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleClick">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/backgroung.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="cancel" >退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Cookies from 'js-cookie';

export default {
    data() {
        return {}
    },
    methods:  {
        handleMenu() {
            this.$store.commit('collapseMenu')
        },
        handleClick(command) {
            if (command === 'cancel') {
                console.log('登出')
                // 清除cookie中的token
                Cookies.remove('token')
                // 清除cookie中的menu
                Cookies.remove('menu')
                // 跳转到登录页
                this.$router.push('/login')
            }
        }
    },
    computed: {
        ...mapState({
            tags:state =>state.tab.tabsList
        })
    }
}
</script>
<style lang="less" scoped>
.header-container {
    padding: 0 10px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: white;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50px;
        }
    }
    .l-content{
        display: flex;
        align-items: center;
        .breadcrumb /deep/ .el-breadcrumb__inner {
        color:white;
        font-weight: 200;
        cursor: pointer;
                }
    }
}
</style>