<template>
  <el-container class="consume_container">
    <el-header>
      <h2>会员消费记录</h2>
    </el-header>
    <el-main class="consume_main">
      <el-button @click="dialog = true" type="primary">新增</el-button>
      <el-table :data="consumeData" style="width: 100%" :height="table">
        <el-table-column prop="id" label="编号" width="180"> </el-table-column>
        <el-table-column prop="state" label="当前流程状态" width="180">
        </el-table-column>
        <el-table-column prop="phone" label="手机"> </el-table-column>
        <el-table-column prop="identyCard" label="身份证后4位">
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="cardId" label="卡号"> </el-table-column>
        <el-table-column prop="consumBalance" label="消费前卡余额">
        </el-table-column>
        <el-table-column prop="consumDate" label="消费日期"> </el-table-column>
        <el-table-column prop="consumAmount" label="消费金额">
        </el-table-column>
        <el-table-column prop="discount" label="折扣力度"> </el-table-column>
      </el-table>

      <!-- 抽屉 -->
      <el-drawer
        title="会员消费"
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
                v-model="consumeForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="身份证后4位" :label-width="formLabelWidth">
              <el-input
                v-model="consumeForm.identyCard"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input
                v-model="consumeForm.name"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="卡号" :label-width="formLabelWidth">
              <el-input
                v-model="consumeForm.cardId"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="消费前余额" :label-width="formLabelWidth">
              <el-input
                v-model="consumeForm.beConsumeBalance"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item label="消费日期" :label-width="formLabelWidth">
              <el-date-picker
                v-model="consumeForm.consumDate"
                type="datetime"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item>

            <el-form-item label="消费金额" :label-width="formLabelWidth">
              <el-input
                v-model="consumeForm.consumAmount"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="消费后余额" :label-width="formLabelWidth">
              <el-input
                v-model="consumeForm.currentBalance"
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
  </el-container>
</template>

<script>
export default {
  name: 'Consumption',
  data() {
    return {
      consumeData: [
        {
          id: '123',
          state: '正常',
          name: 'aaa',
          sex: '女',
          phone: '123',
          identyCard: '1234',
          cardId: '122111',
          consumBalance: '123',
          consumAmount: '111',
          consumDate: '2021-11-04 09:09:09',
          discount: '6'
        }
      ],
      consumeForm: {
        phone: '',
        identyCard: '',
        name: '',
        cardId: '',
        beConsumeBalance: '',
        consumeDate: '',
        consumeAmount: '',
        currentBalance: ''
      },
      dialog: false,
      formLabelWidth: '100px',
      table: window.innerHeight - 250 //固定表头高度
    }
  },
  methods: {
    // handleClose(done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
    //       done()
    //     })
    //     .catch(_ => {})
    // }
    cancelForm() {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
  },
}
</script>

<style lang="less" scoped>
.consume_container {
  width: 100%;
  height: 800px;
  background-color: white;
}
.recharge-drawer_form {
  position: absolute;
  left: 50%;
  margin-left: -140px;
}
// 输入框
/deep/ .el-input__inner {
  width: 180px;
}
.el-container {
  height: 100%;
}
.consume_main {
  width: 100%;
  height: 600px;
  background-color: white;
}
.recharge-drawer_footer {
  position: absolute;
  //text-align: center;
  bottom: 60px;
  left: 50%;
  margin-left: -80px;
}
</style>
