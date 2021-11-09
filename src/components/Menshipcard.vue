<template>
  <el-container class="menship_container">
    <el-header>
      <h2>会员卡信息</h2>
    </el-header>
    <el-main class="menship_main">
      <el-button type="primary" @click="dialogFormVisible = true"
        >新增</el-button
      >
      <el-table :data="menberShip" style="width: 100%" :height="table">
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

      <!-- 新增会员信息对话框 -->
      <el-dialog
        title="新增会员"
        :visible.sync="dialogFormVisible"
        width="40%"
      >
        <el-form :model="addMenshipForm" class="add_menship_form">
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input
              v-model="addMenshipForm.phoneNum"
              autocomplete="off"
              style="width: 70%;"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input
              v-model="addMenshipForm.name"
              autocomplete="off"
              style="width: 70%;"
            ></el-input>
          </el-form-item>
          <el-form-item label="身份证后4位" :label-width="formLabelWidth">
            <el-input
              v-model="addMenshipForm.identyCard"
              autocomplete="off"
              style="width: 70%;"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Menshipcard',
  data() {
    return {
      menberShip: [
        {
          id: '123',
          state: '正常',
          name: 'aaa',
          sex: '女',
          phone: '123',
          identyCard: '1234',
          accountBalance: '123',
          applicant: 'www',
          applyTime: '2021-11-04 09:09:09',
          updateTime: '2021-11-04 09:09:09'
        },
        {
          id: '1233',
          state: '正常',
          name: 'bbb',
          sex: '女',
          phone: '12312312312',
          identyCard: '1234',
          accountBalance: '123',
          applicant: 'www',
          applyTime: '2021-11-04 09:09:09',
          updateTime: '2021-11-04 09:09:09'
        }
      ],
      table: window.innerHeight - 180, //固定表头高度
      dialogFormVisible: false,
      addMenshipForm: {
        phoneNum: '',
        name: '',
        identyCard: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.menship_container {
  width: 100%;
  height: 750px;
  background-color: white;
}

.menship_main {
  width: 100%;
  height: 600px;
  background-color: white;
}

.add_menship_dialog {
  //width: 40%;
}
// .add_menship_form {
//   position: absolute;
//   left: 50%;
//   margin-left: -140px;
// }
//输入框
// ::v-deep .el-input__inner {
//   width: 80%;
// }
</style>
