<template>
    <div id="bag">
        <!-- 选择 市场和我的 -->
        <div id="banner">
            <ul>
                <li><a href="">全部</a></li>
                <li><a href="">我的</a></li>
            </ul>
        </div>

        <!-- 奇怪的导航栏 -->
        <div id="nav">
            <ul>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/上衣 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/套装 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/裤子1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/袜子 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/鞋子 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/背包 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/智能手杖管理 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/耳饰 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/项链 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/戒指 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/眼镜 1.png" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../assets/images/logo/dress_logo/帽子 1.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div id="dress_list">
            <ul>
                <li v-for="(item, index) in dress_list" :key="index">
                    <div class="dress_item" @click="payConfirm">
                        <img src="../../assets/images/logo/dress_logo/cloth.png" alt="">
                        <span>
                            <img src="../../assets/images/logo/gold.png" alt="">
                            <i>{{item.dress_pay}}</i>
                        </span>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    name:'bag',
    data(){
        return{
            dress_list:[
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },
                {
                    dress_image:'',
                    dress_pay:'10',
                },

            ]
        }
    },
    methods:{
        // 确定购买 弹窗
        payConfirm(){
            this.$confirm('你确定花费 xxx 金币购买此道具吗？', '购买', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
        }).then(() => {
            this.$message({
            type: 'success',
            message: '购买成功!点击“我的”，即刻却换已购买的道具'
          });
        }).catch(() => {
            this.$message({
            type: 'info',
            message: '已取消购买'
          });
        });
        },
    },

    mounted(){
        // 获取装扮信息
        this.$API.getDress().then((res) => {
            this.dress_info = res.data
            this.dress.list.push(dress_info)
        })
    }

}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
#bag{
    width: 700px;
    height: 540px;

    background-color: white;

    position: relative;
    float: left;

    #banner{
        margin: 30px 30px;
        
        ul{
            list-style-type: none;
            
            li{
                display: inline;

                margin: 10px 10px;

                a{
                    text-decoration: none;
                }
            }
        }
    }

    #nav{

        ul{
            list-style-type: none;

            display: flex;
            justify-content: center;
            
            
            li{
                display: inline;

                margin: 10px 15px;

            }
        }
    }

    #dress_list{
        width: 650px;
        height: 320px;
        margin-left: 30px;

        ul{
            width: 650px;
            height: 320px;

            list-style-type: none;

            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .dress_item{
                width: 80px;
                height: 120px;
                margin: 10px 10px;

                border: 1px solid #333;
                border-radius: 5px;

            img{
                width: 80px;
                height: 88px;
            }

            span{
                margin-left: 10px;

                img{
                    width: 15px;
                    height: 15px;
                }
            }
        }
        }

        
    }
}
</style>