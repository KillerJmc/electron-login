<template>
  <div class="main">
    <el-form>
      <el-form-item>
        <el-text>用户：{{account}}</el-text>
      </el-form-item>
      <el-form-item>
        <el-text>欢迎您！</el-text>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="backToLogin">返回</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const account = ref("")

onMounted(() => {
    // 填充页面的账号信息
    const routerParams = router.currentRoute.value.params
    if (routerParams.hasOwnProperty("account")) {
        account.value = routerParams.account as string
    }
})

const backToLogin = () => {
    router.push("/")
}
</script>

<style scoped>
.main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

