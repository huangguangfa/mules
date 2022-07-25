<template>
  <div class="flex">
    <gf-button size="small" circle>
      <gf-icon-q-rcode color="#000000" size="20"></gf-icon-q-rcode>
    </gf-button>
    <gf-button color="primary" size="small" circle>
      <gf-icon-q-rcode color="white" size="20"></gf-icon-q-rcode>
    </gf-button>
    <gf-button color="success" size="smaller" circle>
      <gf-icon-success-fill color="white" size="25"></gf-icon-success-fill>
    </gf-button>

    <gf-button color="primary">
      <gf-icon-add-fill
        slot="icon-left"
        color="white"
        size="16"
        style="margin-right: 3px"
      ></gf-icon-add-fill>
      添加
    </gf-button>
    <gf-button color="primary" size="small">
      <gf-icon-q-rcode color="white" size="20"></gf-icon-q-rcode>
    </gf-button>
    <gf-button color="success" disabled>
      <gf-icon-loading
        slot="icon-left"
        color="white"
        size="15"
        spin
        style="margin-right: 3px"
      ></gf-icon-loading>
      加载中
    </gf-button>
    <gf-button color="success" size="smaller">
      <gf-icon-success-fill color="white" size="25"></gf-icon-success-fill>
    </gf-button>
  </div>
</template>

<script lang="ts" setup></script>
