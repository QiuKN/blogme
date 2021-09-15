/*
 * @Author: your name
 * @Date: 2021-09-13 17:02:38
 * @LastEditTime: 2021-09-14 13:49:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \DiorsBlog\src\store\index.ts
 */
/**
 * @author Diors
 * @description 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。
 */


import { createStore } from 'vuex'

const files: any = import.meta.globEager('./modules/*.ts')
const modules: any = {}
let arr: Array<any> = []

for (let i in files) {
    arr.push(i)
}

arr.forEach((key: any) => {
    modules[key.replace(/(\.\/modules\/|\.ts)/g, '')] = files[key].default
})

Object.keys(modules).forEach((key) => {
    modules[key]['namespaced'] = true
})

export default createStore({
    modules,
});
