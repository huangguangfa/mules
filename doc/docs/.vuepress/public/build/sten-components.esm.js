import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-5fa84477.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.15.1 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-1d32cb7b.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["gf-input",[[4,"gf-input",{"disabled":[4],"clearable":[4],"value":[1],"type":[1],"maxlength":[2],"status":[1],"iconFontSize":[2,"icon-font-size"],"iconColor":[1,"icon-color"],"placeholder":[1],"autofocus":[4],"resize":[1],"minRows":[8,"min-rows"],"maxRows":[8,"max-rows"],"rows":[8],"autosize":[4],"arrays":[16],"curentValue":[32],"autocompleteState":[32],"calculateStyle":[32]}]]],["gf-autocomplete",[[0,"gf-autocomplete",{"show":[16]}]]],["gf-button",[[6,"gf-button",{"color":[1],"disabled":[4],"textColor":[1,"text-color"],"classNames":[1,"class-names"],"plain":[4],"size":[1],"circle":[4],"nativeType":[1,"native-type"]}]]],["gf-button-group",[[4,"gf-button-group"]]],["gf-icon-add-cart-fill",[[0,"gf-icon-add-cart-fill",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-add-fill",[[0,"gf-icon-add-fill",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-add-select",[[0,"gf-icon-add-select",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-arrow-down",[[0,"gf-icon-arrow-down",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-arrow-left",[[0,"gf-icon-arrow-left",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-arrow-right",[[0,"gf-icon-arrow-right",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-arrow-up",[[0,"gf-icon-arrow-up",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-calendar-fill",[[0,"gf-icon-calendar-fill",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-chaogaoyinzhi-c",[[0,"gf-icon-chaogaoyinzhi-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-close",[[0,"gf-icon-close",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-diantai-c",[[0,"gf-icon-diantai-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-dianzan-c",[[0,"gf-icon-dianzan-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-dianzishu-c",[[0,"gf-icon-dianzishu-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-falling",[[0,"gf-icon-falling",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-feeds-fill",[[0,"gf-icon-feeds-fill",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-fufeixiangmu-c",[[0,"gf-icon-fufeixiangmu-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-huiyuandengji-c",[[0,"gf-icon-huiyuandengji-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-jingxuan-c",[[0,"gf-icon-jingxuan-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-jinriredian-c",[[0,"gf-icon-jinriredian-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-kefu-c",[[0,"gf-icon-kefu-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-leftarrow",[[0,"gf-icon-leftarrow",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-libao-c",[[0,"gf-icon-libao-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-loading",[[0,"gf-icon-loading",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-map",[[0,"gf-icon-map",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-paihangbang-c",[[0,"gf-icon-paihangbang-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-pinglun-c",[[0,"gf-icon-pinglun-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-q-rcode",[[0,"gf-icon-q-rcode",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-qiandao-c",[[0,"gf-icon-qiandao-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-remenhuati-c",[[0,"gf-icon-remenhuati-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-rightarrow",[[0,"gf-icon-rightarrow",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-rising",[[0,"gf-icon-rising",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-set",[[0,"gf-icon-set",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-shengri-c",[[0,"gf-icon-shengri-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-task-management",[[0,"gf-icon-task-management",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-test",[[0,"gf-icon-test",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-xianshimianfei-c",[[0,"gf-icon-xianshimianfei-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-xiaoxi-c",[[0,"gf-icon-xiaoxi-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-youhui-c",[[0,"gf-icon-youhui-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-zhibo-c",[[0,"gf-icon-zhibo-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-zunguishenfen-c",[[0,"gf-icon-zunguishenfen-c",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-tag",[[1,"gf-tag"]]],["gf-icon-clear",[[0,"gf-icon-clear",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-info",[[0,"gf-icon-info",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]],["gf-icon-success-fill",[[0,"gf-icon-success-fill",{"size":[8],"styles":[16],"color":[1],"rotate":[2],"spin":[4],"opacity":[8]}]]]], options);
});
