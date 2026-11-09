<template>
  <div>
    <div v-html="part1"></div>
    <div v-html="part2"></div>
  </div>
</template>

<script setup lang="ts">
// 机械化迁移：官网静态内容原样保留，行为由 plugins/landing.client.ts 接管
// matrix.html（趋势/成果/渠道生态墙/供应商板块）已按精简版式摘除，文件保留在 raw/ 备用
import part1 from '~/raw/landing-1.html?raw'
import part2 from '~/raw/landing-2.html?raw'
</script>
