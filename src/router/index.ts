import {createRouter, createWebHashHistory} from "vue-router"

const router = createRouter({
    // electron必须使用hash
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            name: "主页",
            component: () => import("@/views/LoginPage.vue")
        },
        {
            path: "/info/:account",
            name: "用户信息",
            component: () => import("@/views/UserInfoPage.vue")
        }
    ]
})

// 设置页面标题
router.beforeEach((to) => {
    document.title = <string> to.name
    return true
});

export default router
