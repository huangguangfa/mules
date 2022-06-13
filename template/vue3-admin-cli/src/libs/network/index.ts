import { exception } from "@/utils/util"
import useEvents from "@/hooks/global/useEvents"
export function checkNetwork() {
    const { $emit } = useEvents();
    try {
        function updateOnline() {
            $emit("connectionNetwork", {
                online: !!navigator.onLine
            });
        }
        window.addEventListener('online', updateOnline);
        window.addEventListener('offline', updateOnline);
    } catch (e) {
        exception('加载网络监测失败', e)
    }
}