export default{
    state:{
        isCollapse: false //控制菜单的展开还是收起
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse =!state.isCollapse
        }
    }
}