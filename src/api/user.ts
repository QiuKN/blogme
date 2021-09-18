import http from "../untils//http/index";
export function register(data: any) {
    return http.request({
        url: "/users/regist",
        method: "post",
        data
    })
}