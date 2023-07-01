<template>
    <div id="invite">
        <button id="add_code" @click="addCode">···</button>
        <p>邀请好友专区积分</p>
        <p>邀请好友使用“小乖”，请对方注册并填写下方邀请码，双方皆可获得 {{ inviteReward }} 金币的友情奖励！</p>

        <div id="invite_code">{{inviteCode}}</div>

        <div id="descript">
            <p>每位注册用户都有自己专属的邀请码，每位受邀者仅能输入一次邀请码。</p>
            <p>1、如何找到自己的邀请码？</p>
            <p>登录账户->我的->邀请</p>
            <p>2、如何输入好友的邀请码？</p>
            <p>左上角的···</p>
            
        </div>
    </div>
</template>

<script>
export default{
    name:'invite',
    data(){
        return{
            inviteCode:'INVITEYOURDADY666',
            inviteReward: 50,
        }
    },
    methods:{
        // 获取邀请码

        // 输入邀请码
        addCode(){
            this.$alert('<input type="text" style="width:380px; text-align:center">', '请输入邀请码', {
            dangerouslyUseHTMLString: true
        });
        },

    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#invite{

    width: 370px;
    height: 540px; 
    background-color: white;

    float: left;

    p{
        margin: 20px 10px;
    }
    
    #add_code{
        width: 80px;
        height: 30px;
        display: block;
        background-color: white;

        font-size: 50px;
        line-height: 30px;

        border: none;
    }
    #add_code:hover{
        cursor: pointer;
    }

    #invite_code{
        width: 345px;
        height: 28px;
        margin: 0 auto;
        background-color: #D8DCFA;

        border-radius: 10px;

        text-align: center;
    }

    #descript{
        width: 370px;
        height: 300px;
    }
}
</style>