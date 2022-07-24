import "normalize.css";
// reset
import "../theme/src/reset.scss";

import "../theme/src/index.scss";
// for dark mode
import "../theme/src/dark/css-vars.scss";

import "./styles/css-vars.scss";
import "./styles/app.scss";

import "uno.css";

import VPApp from "./components/vp-app.vue";
import VPDemo from "./components/vp-demo.vue";
import IconList from "./components/globals/icons.vue";
import GiscusComment from "./components/common/comment/Giscus";

import type { Component } from "vue";

export { default as NotFound } from "./components/vp-not-found.vue";

export const globals: [string, Component][] = [
  ["Demo", VPDemo],
  ["IconList", IconList],
  ["GiscusComment", GiscusComment],
];

export default VPApp;
