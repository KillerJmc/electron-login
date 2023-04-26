<template>
  <div class="main">
    <el-form :label-width="50">
      <el-form-item label="账号">
        <el-col :span="20">
          <el-input placeholder="请输入账号" v-model="account"/>
        </el-col>
      </el-form-item>

      <el-form-item label="密码">
        <el-col :span="20">
          <el-input show-password placeholder="请输入密码" v-model="password"/>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

  <el-dialog v-model="dialogVisible" title="登录结果" width="40%">
    <span>{{loginResult}}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const account = ref("")
const password = ref("")
const loginResult = ref("")
const dialogVisible = ref(false)

const [ correctAccount, correctPassword ] = [ "Jmc", "666" ]
const [ successLoginMsg, failedLoginMsg ] = [ "登录成功！", "用户名或密码错误！" ]

const login = () => {
    if (account.value === correctAccount && password.value === correctPassword) {
        // 提示登录成功消息
        ElMessage.success(successLoginMsg)

        // 跳到用户信息页面
        router.push({
            name: "用户信息",
            params: {
                account: account.value
            }
        })
    } else {
        // 提示登录失败对话框
        loginResult.value = failedLoginMsg
        dialogVisible.value = true
    }
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

