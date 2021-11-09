<template>
  <el-container
    class="home_container"
    style="height: 100%; border: 1px solid #eee"
  >
    <!-- 侧边导航 -->
    <el-aside width="200px">
      <div style="width: 200px; height: 40px;">
        <h2>收银系统</h2>
      </div>
      <el-menu>
        <el-menu-item-group>
          <el-menu-item @click="toRecharge()">
            会员充值记录
          </el-menu-item>
          <el-menu-item @click="toMenshipcard()">
            会员卡信息
          </el-menu-item>
          <el-menu-item @click="toConsumption()">
            会员消费记录
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
    <el-main class="main">
      <div>
        <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'home'
    }
  },
  methods: {
    toRecharge() {
      this.$router.push('/recharge')
    },
    toMenshipcard() {
      this.$router.push('/menshipcard')
    },
    toConsumption() {
      this.$router.push('/consumption')
    }
  }
}
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-aside {
  //color: rgb(33, 30, 30);
  text-align: center;
  //line-height: 200px;
}
.home_container {
  /deep/ .main {
    background-color: #e9eef3;
    height: max-height;
  }
}
</style>
