<template>
  <div class="flex reset">
    <gf-button-group>
      <gf-button color="primary">
        <gf-icon-arrow-left
          slot="icon-left"
          size="20"
          color="white"
        ></gf-icon-arrow-left>
        上一页
      </gf-button>
      <gf-button color="primary">
        <gf-icon-arrow-right
          slot="icon-right"
          size="20"
          color="white"
        ></gf-icon-arrow-right>
        下一页
      </gf-button>
    </gf-button-group>

    <gf-button-group class="ml20">
      <gf-button color="primary">
        <gf-icon-add-select color="white" size="20"></gf-icon-add-select>
      </gf-button>
      <gf-button color="primary">
        <gf-icon-success-fill color="white" size="20"></gf-icon-success-fill>
      </gf-button>
      <gf-button color="primary">
        <gf-icon-close color="white" size="20"></gf-icon-close>
      </gf-button>
    </gf-button-group>
  </div>
</template>

<script lang="ts" setup></script>
