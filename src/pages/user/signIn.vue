<template>
    <div id="signIn">
        <!-- 暂时不要 右上角关闭按键 ①不好实现关闭功能 ②布局容易被破坏 -->
        <!-- <a id="close" >
            <img src="../../assets/images/logo/close.png" alt="">
        </a> -->
        <div id="sign_in_image">
            <img src="../../assets/images/frame/sign_in.png" alt="">
        </div>
        <div id="sign_in_information">
            <ul>
                <li>
                    <p>
                        {{ userSignIn_info.total }}
                    </p>
                    <b>
                        总打卡 
                    </b>
                </li>
                <li>
                    <p>
                        {{ userSignIn_info.top }}
                    </p>
                    <b>
                        最高连续 
                    </b>
                </li>
                <li>
                    <p>
                        {{ userSignIn_info.current }}
                    </p>
                    <b>
                        当前连续 
                    </b>
                </li>
            </ul>

        </div>
        <button>
            今日签到
        </button>

    </div>
</template>

<script>

export default {
    name:'signIn',
    data(){
        return{
            userSignIn_info:{
                // 总打卡
                total:13,
                // 最高连续打卡
                top:13,
                // 当前连续打卡
                current:0
            }
        }
    },

    // 获取 签到 数据
    mounted(){
        this.$API.getUserSignIn().then((res) => {
            this.userSignIn_info = res.data
        })
    }
}

</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#signIn{
    width: 370px;
    height: 540px;

    background-color: white;

    position: relative;
    float: left;

    // #close{
    //     position: absolute;
    //     top: 15px;
    //     right: 15px;
    // }

    #sign_in_image{
        width: 370px;
        height: 400px;
        
        position: relative;

        img{
            position: absolute;
            top: 26%;
            left: 17%;
        }
    }
    
    #sign_in_information{
        width: 370px;
        height: 70px;

        ul{
            list-style-type: none;

            display: flex;
            justify-content: center;

            li{
                width: 100px;

                text-align: center;
            }
        }
    }
        
    button{
        width: 350px;
        height: 40px;
        margin: 20px 10px;

        background-color: #1F78D1;
        border: 1px solid #1F78D1;
        border-radius: 10px;

        color: white;


    }
    

}
</style>