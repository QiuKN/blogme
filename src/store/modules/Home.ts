/*
 * @Author: your name
 * @Date: 2021-09-13 17:10:53
 * @LastEditTime: 2021-09-14 14:08:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DiorsBlog\src\store\modules\index.ts
 */

import { ActionContext } from 'vuex'

interface HomeSate {
    title: String
}

const state: HomeSate = ({
    title: 'QDiorsBlog'
})

const getters = {
    title: (state: HomeSate)=> state.title, 
}

const mutations = {
    getName(state: HomeSate, data: any) {
        state.title = data
    }
}

const actions = {
    ChangeName({ commit }:any, data: any) {
        return commit('getName', data)
    }
}

export default { state, getters, mutations, actions }