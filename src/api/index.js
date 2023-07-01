import request from '../utils/request'

// 获取 角色签到 数据 √
export function getUserSignIn(){
    return request({
        url:'user/signIn',
        method:'GET',
        params:{
            // 总打卡
            total, 
            // 最高连续打卡
            top,
            // 当前连续打卡
            current
        }
    })
}

// 获取 装扮 信息 √
export function getDress(){
    return request({
        url:'/xg/clothing',
        method:'GET'
    })
}

// 添加 装扮 信息
export function addDress(){
    return request({
        url:'/xg/clothing',
        method:'POST',
        data:{
            clothing_id,
            picture_url,
            price,
            type
        }
    })
}

// 获取 所有公告 信息 √
export function getAffiche(){
    return request({
        url:'/xg/cement',
        method:'GET',
    })
}

// 增加 公告 信息
export function addAffiche(){
    return request({
        url:'/xg/add',
        method:'POST',
        data:{
            id,
            content,
            user_id
        }
    })
}

// 更改 公告 信息
export function updateAffiche(){
    return request({
        url:'/xg/update',
        method:'PUT',
        data:{
            id,
            content,
            user_id
        }
    })
}

// 获取 根据公告id 的对应信息
export function getByAfficheId(){
    return request({
        url:'/xg/cement/:id',
        method:'GET',
        params:{
            id
        }
    })
}

// 获取 所有动态 信息 √
export function getAllMoment(){
    return request({
        url:'/xg/gets_dynamic',
        method:'GET'
    })
}

// 创建 动态
export function addMoment(){
    return request({
        url:'/xg/create_dynamic',
        method:'POST',
        data:{
            dynamic_id,
            dynamic_content,
            user_id,
            issue_data, // 时间
    
        }
    })
}

// 修改 动态 信息
export function updateMoment(){
    return request({
        url:'/xg/add_dynamic_time',
        method:'PUT',
        data:{
            dynamic_id,
            user_id,
            content
        }
    })
}

// 获取 某个成员 动态
export function getMoment(){
    return request({
        url:'/xg/get_dynamic',
        method:'GET',
        params:{
            user_id
        }
    })
}

// 发布 挑战 √
export function addChallenge(){
    return request({
        url:'/xg/create_challenge',
        method:'POST',
        data:{
            user_id,
            issue_data,
            title,
            rule,
            reward,
            start_data,
            end_data
        }

    })
}

// 查看 挑战 √
export function getChallenge(){
    return request({
        url:'/xg/get_challenge_info',
        method:'GET',
        params:{
            challenge_id,
            user_id
        }
    })
}

// 邀请用户
export function inviteMember(){
    return request({
        url:'/xg/invite_member',
        method:'PUT',
        data:{
            inviter_id,
            invitee_id
        }
    })
}

// 新添用户
export function addMember(){
    return request({
        url:'/xg/add_user',
        method:'POST',
        data:{
            user_address,
            user_id
        }
    })
}

// 获取活动
export function getActivity(){
    return request({
        url:'/xg/get_activity',
        method:'GET',
        params:{
            activity_id
        }
    })
}

// 添加活动
export function addActivity(){
    return request({
        url:'/xg/addActivity',
        method:'POST',
        data:{
            activity_id,
            content,
            start_time,
            title,
            end_time
        }
    })
}