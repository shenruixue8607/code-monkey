<template>
    <div id="NftRole">
        <img src="../../assets/images/frame/NTF_role.png">
        <button>发行</button>
    </div>
</template>

<script>
export default {
    name:'NftRole'
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#NftRole{
    width: 300px;
    height: 540px;

    position: relative;

    display: inline-block;

    img{
        width: 300px;
        height: 540px;
    }

    button{
        position: absolute;
        bottom: 20px;
        left: 110px;

        width: 92px;
        height: 35px;

        background-color: white;
        border-radius: 5px;
    }
}
</style>