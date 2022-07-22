import "normalize.css";
// for dev
// reset
import "../theme-chalk/src/reset.scss";

import "../theme-chalk/src/index.scss";
// for dark mode
import "../theme-chalk/src/dark/css-vars.scss";

import "./styles/css-vars.scss";
import "./styles/app.scss";

import "uno.css";

import VPApp from "./components/vp-app.vue";
import VPDemo from "./components/vp-demo.vue";
import IconList from "./components/globals/icons.vue";

import type { Component } from "vue";

export { default as NotFound } from "./components/vp-not-found.vue";

export const globals: [string, Component][] = [
  ["Demo", VPDemo],
  ["IconList", IconList],
];

export default VPApp;
