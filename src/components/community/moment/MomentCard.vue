<template>
    <div id="MomentCard">
        <ul>
            <li v-for="(item, index) in moment_list" :key="index">
                <div class="detail">

                    <div id="basic_info">
                        <img class="avater" src="../../../assets/images/frame/avatar.jpg">
                       
                        <div class="user_info">
                            <p class="user_name">{{ item.user_name }}</p>
                            <p class="publish_time">{{ item.publish_time }}</p>
                        </div>
                    </div>

                    <div id="context">
                        {{ item.context }}
                        <br>
                        <img  :src="item.image_url" alt="">
                    </div>
 
                    <div id="footer">
                        <el-button type="primary" icon="el-icon-share" class="el_button"></el-button> 
                        <el-button type="primary" icon="el-icon-chat-dot-round" class="el_button"></el-button>
                        <el-button type="primary" icon="el-icon-thumb" class="el_button"></el-button>
                        
                    </div>

                    <div id="interaction">
                        <ul>
                            <li>
                                <img class="avater" src="../../../assets/images/frame/avatar.jpg">
                                <div class="user_info">
                                    <p class="user_name">{{ item.user_name }}</p>
                                    <p class="publish_time">{{ item.publish_time }}</p>
                                </div>
                                <div class="interaction_context">
                                    <p>评头论足</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name:'MomentCard',
    data(){
        return{
            moment_list:[
                {
                    user_id:1,
                    user_name:'Tasha',
                    publish_time:'2020-1-1',
                    context:'I d say it fills me up quite nicely',
                    image_url:require('../../../assets/images/frame/challenge_01.png')
                }
            ]
        }
    },
    mounted(){
        this.$API.getAllMoment().then((res) => {
            this.MomentList.push(res.data)
        })
    },
    methods: {
      errorHandler() {
        return true
      },
 
    }
}
</script>


<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.el_button {
    height: 25px;
    width: 29px;
    margin-left: 10px;
}

.publish_time {
   color: rgba(10, 1, 22, 0.485);
   padding-left: 8px;
   font-size: 13px;
}
#MomentCard{
    width: 800px;
    height: 100%;
    float: left;

    overflow: scroll;
    overflow-x: hidden;

    background-color: rgba(250, 250, 250, 0.2);

    ul{
        list-style-type: none;

        .detail{
            width: 800px;

            margin: 10px 10px;

            #basic_info{
                width: 800px;
                height: 60px;

                float: left;
                } 
        }
        .avater{
            float: left;

            width: 60px;
            height: 60px;

            border-radius: 30px;
        }
            
        .user_info{
        float: left;

        height: 60px;

        .user_name{
            margin-top: 10px;
            margin-left: 10px;
        }

        .publish_time{
            margin-left: 10px;
        }
        } 

        #context{
            float: left;

            width: 800px;
            margin: 20px 20px;
        }

        #footer{
            width: 700px;
            button{
                float: right;
            }
        }

        #interaction{
            width: 800px;
            height: 60px;

            float: left;

            .avater{
                float: left;
                    
                width: 60px;
                height: 60px;
                    
                border-radius: 30px;
            }
            
            .user_info{
                float: left;

                height: 60px;

                .user_name{
                    margin-top: 10px;
                    margin-left: 10px;
                }

                    .publish_time{
                        margin-left: 10px;
                    }
                    }   
                
                .interaction_context{
                    float: left;

                    width: 800px;
                }
        }
    }
}
</style>