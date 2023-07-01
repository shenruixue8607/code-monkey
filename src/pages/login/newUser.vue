<template>
    <div id="newUser">
        <h1>欢迎来到Guai的世界</h1>
        <button class="connection" @click="goto('/user')">连接钱包</button>
        <br>
        <button class="introduction" @click="goto('/login/introduction_1')">
            <img src="../../assets/images/logo/goto_introduction.png" alt="">
        </button>
    </div>
</template>

<script>
export default{
    methods:{
        goto(path){
            this.$router.push(path)
        }
}
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#newUser{
    width: 1200px;
    height: 600px;
    text-align: center;
    
    position: relative;

    h1{
        line-height: 200px;
    }

    .connection{
        width: 350px;
        height: 60px;
        font-size: 18px;
        background:none;

        border: 1px solid rgba(151, 71, 255, 1);
        border-radius: 20px;

        cursor: pointer;
    }

    .introduction{
        position:absolute;
        bottom: 50px;
        left: 48%;

        width: 50;
        height: 50;
        background: none;

        border: none;

        cursor: pointer;

    }
}
</style>