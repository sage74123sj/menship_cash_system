<template>
  <el-container class="recharge_container">
    <el-header class="recharge_header">
      <h2>会员充值记录</h2>
    </el-header>

    <el-main class="recharge_main">
      <el-button @click="dialog = true" type="primary">新增</el-button>
      <el-table
        :data="rechargeData"
        border
        style="width: 100%"
        :height="table"
        class="recharge_table"
      >
        <el-table-column prop="id" label="编号" width="180"> </el-table-column>
        <el-table-column prop="state" label="当前流程状态" width="180">
        </el-table-column>
        <el-table-column prop="name" label="会员姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="phone" label="手机"> </el-table-column>
        <el-table-column prop="identyCard" label="身份证后4位">
        </el-table-column>
        <el-table-column prop="accountBalance" label="账户余额">
        </el-table-column>
        <el-table-column prop="applicant" label="申请人"> </el-table-column>
        <el-table-column prop="applyTime" label="申请时间"> </el-table-column>
        <el-table-column prop="updateTime" label="更新时间"> </el-table-column>
      </el-table>

      <!-- 抽屉 -->
      <el-drawer
        title="会员充值"
        :before-close="handleClose"
        :visible.sync="dialog"
        direction="rtl"
        custom-class="demo-drawer"
        ref="drawer"
        size="600px"
      >
        <div class="demo-drawer__content">
          <el-form :model="form" class="recharge-drawer_form">
            <el-form-item label="手机号码" :label-width="formLabelWidth">
              <el-input
                v-model="rechargeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="身份证后4位" :label-width="formLabelWidth">
              <el-input
                v-model="rechargeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input
                v-model="rechargeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="卡号" :label-width="formLabelWidth">
              <el-input
                v-model="rechargeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="充值前余额" :label-width="formLabelWidth">
              <el-input
                v-model="rechargeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <!-- <el-form-item label="充值日期" :label-width="formLabelWidth">
              <el-date-picker
                v-model="rechargeForm.recharge_date"
                type="datetime"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item> -->
            <el-form-item label="充值金额" :label-width="formLabelWidth">
              <el-input
                v-model="rechargeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="充值后余额" :label-width="formLabelWidth">
              <el-input
                v-model="rechargeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <div class="recharge-drawer_footer">
            <el-button @click="cancelForm">取 消</el-button>
            <el-button
              type="primary"
              @click="$refs.drawer.closeDrawer()"
              :loading="loading"
              >{{ loading ? '提交中 ...' : '确 定' }}</el-button
            >
          </div>
        </div>
      </el-drawer>
    </el-main>
    <el-footer>
      <div class="block">
        <span class="demonstration">显示总数</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Recharge',
  data() {
    return {
      rechargeData: [
        {
          id: '123',
          state: true,
          name: 'aaa',
          sex: '女',
          phone: '123',
          identyCard: '1234',
          accountBalance: '123',
          applicant: 'www',
          applyTime: '2021-11-04 09:09:09',
          updateTime: '2021-11-04 09:09:09'
        }
      ],
      rechargeForm: {
        phone: '',
        identy_card: '',
        name: '',
        cardId: '',
        be_recharge_balance: '',
        recharge_date: '',
        recharge_amount: '',
        current_balance: ''
      },
      dialog: false,
      formLabelWidth: '100px',
      table: window.innerHeight - 250 //固定表头高度
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // getHeight() {
    //   this.tableheight.height = window.innerHeight - 68 + 'px' //获取浏览器高度减去顶部导航栏
    // },
    cancelForm() {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    }
    // handleClose(done) {
    //   if (this.loading) {
    //     return
    //   }
    //   this.$confirm('确定要提交表单吗？')
    //     .then(_ => {
    //       this.loading = true
    //       this.timer = setTimeout(() => {
    //         done()
    //         // 动画关闭需要一定的时间
    //         setTimeout(() => {
    //           this.loading = false
    //         }, 400)
    //       }, 2000)
    //     })
    //     .catch(_ => {})
    // }
  }
  // created() {
  //   window.addEventListener('resize', this.getHeight)
  //   this.getHeight()
  // },
  // destroyed() {
  //   window.removeEventListener('resize', this.getHeight)
  // }
}
</script>

<style lang="less" scoped>
.recharge_container {
  width: 100%;
  height: 750px;
  background-color: white;
}

.recharge-drawer_form {
  position: absolute;
  left: 50%;
  margin-left: -140px;
}
// 抽屉标题加粗
.el-drawer__header > :first-child {
  font-weight: bold;
}
// 输入框
/deep/ .el-input__inner {
  width: 180px;
}

.el-input {
  width: 100px;
  box-sizing: border-box;
}
.aaa {
  text-align: center;
}
.recharge-drawer_footer {
  position: absolute;
  //text-align: center;
  bottom: 40px;
  left: 50%;
  margin-left: -80px;
}
// .recharge_drawer_content {
//   width: 100%;
//   text-align: center;
// }
// .el-form-item__content {
//   text-align: center;
//   width: 200px;
// }
</style>
