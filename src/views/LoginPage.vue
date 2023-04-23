<template>
  <div class="main">
    <el-form :label-width="50">
      <el-form-item label="账号">
        <el-col :span="20">
          <el-input placeholder="请输入账号" />
        </el-col>
      </el-form-item>

      <el-form-item label="密码">
        <el-col :span="20">
          <el-input placeholder="请输入密码" />
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  const login = () => {
      ElMessage.success("登录成功！")
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

