<template>
    <div id="information">
        <!-- <a id="close" >
            <img src="../../assets/images/logo/close.png" alt="">
        </a> -->
        <!-- 后续用 v-for遍历 代替 -->
        <div class="detail">
            <em class="date">{{ affiche_info.date }}</em>
            <em class="activity_name">{{ affiche_info.activityName }}</em>
            <img src="../../assets/images/frame/activity.png" alt="">
        </div>
    </div>
</template>

<script>
export default{
    name:'information',
    data(){
        return{
            affiche_info:{
                date:'2002.02.02',
                activityName:'jerc'
            }
        }
    },
    mounted(){
        // 获取公告信息
        this.$API.getAffiche().then((res) => {
            this.affiche_info.push(res.data)
        })
    }
}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#information{
    width: 370px;
    height: 540px;

    background-color: white;

    position: relative;
    float: left;

    overflow: scroll;
    overflow-x: hidden;

    
    // #close{
    //     position: absolute;
    //     top: 15px;
    //     right: 15px;
    // }

    .detail{
        width: 330px;
        height: 170px;
        margin: 10px 10px;



        .date{
            float: left;
        }

        .activity_name{
            float:right;
        }

        img{
            width: 330px;
            height: 160px;
            margin-top: 10px;
        }
    }
}
</style>