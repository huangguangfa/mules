import useRequest from "@/hooks/useHttpRequest"
import axios from 'axios'
const { $all, $cancel, $del, $get, $patch, $post, $put } = useRequest()
export function startRequest(type?: string) {
    $get("/typelist")
        .then(res => {
            console.log(res)
        }).catch(e => {
            console.log('错误了', e)
        })
}