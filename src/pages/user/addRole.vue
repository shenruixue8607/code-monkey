<template>
    <div id="addRole">
        <button class="add_btn" @click="outerVisible = true">+</button>
  
  <!-- 弹窗部分 -->
  <el-dialog title="角色创建" :visible.sync="outerVisible">
    <el-dialog
      width="30%"
      title="确认"
      :visible.sync="innerVisible"
      append-to-body>
      您确定要使用XXX代币铸造此数字人吗？
      <div slot="footer" class="dialog-footer" >
      <el-button @click="innerVisible = false">取 消</el-button>
      <el-button type="primary">创 建</el-button>
    </div>
    </el-dialog>
        <!-- 弹窗内容部分 -->
        <img src="../../assets/images/frame/NTF_role_ori.png">
        <ul id="dialog_list">
            <li>
                <label for="">昵称</label> <br>
                <input type="text" placeholder="不可重复">
            </li>
            <li>
                <label for="">性别</label> <br>
                <input type="text" placeholder="男/女">
            </li>
            <li>
                <label for="">梦想标签</label> <br>
                <input type="text" placeholder="UI设计师">
            </li>
        </ul>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="innerVisible = true">创 建</el-button>
    </div>
  </el-dialog>


</div>
</template>

<script>
export default {
    props:[

    ],
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
}
</script>


<style lang="less" scoped>
#addRole{
    width: 370px;
    height: 540px;

    background-color: white;
    position: relative;

    float: left;
    
    .add_btn{
        width: 100px;
        height: 150px;
        margin: 20px 20px;
        background-color: #D9D9D9;

        border-radius: 10px;

        font-size: 50px;
    }

    // 设置人物初始属性
    #dialog_list{
        display: inline-block;



        li{
            list-style-type: none;
            margin: 20px 10px;

            label{
                font-size: 13px;
            }

            input{
                width: 220px;
                height: 35px;

                border-radius: 10px;
            }
        }

    }
}

</style>