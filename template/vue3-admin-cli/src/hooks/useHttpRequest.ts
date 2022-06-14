import httpInstance from "@/libs/http";
import { CONTENT_TYPE } from "@/config/index"
/**
 * 初始化http
 * @param data 当前入参描述
 * @returns {type: Number} {0: 不展示， 1: 激活状态, 2：置灰状态}
 */
const http = httpInstance({
    base: "https://www.huangguangfa.cn/blogs"
});


export default function useHttpRequest() {
    const post = (url: string, param?: Record<string, any>, config = {
        headers: {
            'Content-Type': CONTENT_TYPE.json
        }
    }) => {
        return http.post(url, param, config)
    }
    return {
        $get: http.get,
        $post: post,
        $put: http.put,
        $patch: http.patch,
        $del: http.del,
        $all: http.all,
        $cancel: http.cancel,
    }
}