<template>
    <div id="moment-all">
        <MomentCard></MomentCard>

        <div class="rightSide">
            <div id="communityAffiche">
                社区公告
             
                    <ul class="infinite-list" v-infinite-scroll="load">
                        <li v-for="i in count" class="infinite-list-item">6</li>
                    </ul>
                
            </div>

            <div id="challengeAffiche">
                挑战公示
                
                    <ul class="infinite-list" v-infinite-scroll="load">
                        <li v-for="i in count" class="infinite-list-item">5</li>
                    </ul>
               
            </div>
        </div>
    </div>
</template>

<script>
    import MomentCard from '@/components/community/moment/MomentCard.vue';
    export default {
        name: 'moment-all',
        data() {
            return {
                count: 0
            }
        },
        methods: {
            load() {
                this.count += 2
            }
        },
        components: {
            MomentCard
        }

    }
</script>

<style lang="less" scoped>
    * {
        margin: 0;
        padding: 0;
    }
   
    .infinite-list::-webkit-scrollbar {
     display: none;
}
    .infinite-list {

        margin-left: 20px;
        height: calc(100% - 22px);
     
            overflow: auto;
          
    }
  

    #moment-all {

        width: 1120px;
        height: 480px;
        float: left;

        #detail {
            width: 800px;
            height: 100%;
            float: left;
            overflow: scroll;
            overflow-x: hidden;
            overflow-y: hidden;

        }

        .rightSide {
            width: 280px;
            height: 100%;
            float: right;
            background-color: white;

            #communityAffiche {
                width: 100%;
                height: 50%;
              
            }

            #challengeAffiche {
                width: 100%;
                height: 50%;
             
            }
        }
    }
</style>