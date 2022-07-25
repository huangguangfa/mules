<template>
  <div class="reset" style="width: 300px">
    <gf-input placeholder="自适应文本高度" type="textarea" autosize></gf-input>
    <gf-input
      placeholder="固定列数且不可拖动"
      type="textarea"
      rows="4"
      resize="none"
    ></gf-input>
    <gf-input
      placeholder="最少3列最大10列"
      type="textarea"
      min-rows="3"
      max-rows="10"
    ></gf-input>
  </div>
</template>
