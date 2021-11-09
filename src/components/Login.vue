<template>
  <div class="login_container">
    <div class="login_box">
      <el-form
        label-width="120px"
        class="login_form"
        :model="loginForm"
        ref="loginForm"
        :rules="loginFormRules"
      >
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitLoginForm('loginForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  //name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitLoginForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('submit!')
          this.$router.push('/home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // login(loginForm) {
    //   this.$refs[loginForm].validate(valid => {
    //     if (valid) {
    //       this.$router.push('/home')
    //     } else {
    //       return false
    //     }
    //   })
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
}
.login_box {
  background-color: rgb(243, 246, 247);
  width: 450px;
  height: 300px;
  position: absolute;
  border-radius: 15px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_form {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  padding: 50px 20px;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
/deep/ .el-input__inner {
  width: 200px;
}
</style>
