import httpInstance from "@/libs/http";
/**
 * 初始化http
 * @param data 当前入参描述
 * @returns {type: Number} {0: 不展示， 1: 激活状态, 2：置灰状态}
 */
const http = httpInstance({
    base: "https://www.huangguangfa.cn"
});

export default function useHttpRequest() {
    return {
        $get: http.get,
        $post: http.post,
        $put: http.put,
        $patch: http.patch,
        $del: http.del,
        $all: http.all,
        $cancel: http.cancel,
    }
}