<template>
    <div id="rank">
        <CommonHeader></CommonHeader>

        <OverAllList></OverAllList>
        <ProgressList></ProgressList>
        <PropertyList></PropertyList>
        <CreditList></CreditList>
    </div>
</template>

<script>

import CommonHeader from "@/components/CommonHeader.vue";

import OverAllList from "@/components/rank/OverAllList.vue";
import ProgressList from "@/components/rank/ProgressList.vue";
import PropertyList from "@/components/rank/PropertyList.vue";
import CreditList from "@/components/rank/CreditList.vue";

export default {
    name:'rank',
    components:{
        CommonHeader,
        OverAllList,
        ProgressList,
        PropertyList,
        CreditList

    }
}
</script>