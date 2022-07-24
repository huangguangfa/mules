<script setup lang="ts">
import { onMounted, ref } from "vue";
import nprogress from "nprogress";
import { isClient, useToggle } from "@vueuse/core";
import { useSidebar } from "../composables/sidebar";
import { useToggleWidgets } from "../composables/toggle-widgets";
import { breakpoints } from "../constant";
import VPOverlay from "./vp-overlay.vue";
import VPNav from "./vp-nav.vue";
import VPSubNav from "./vp-subnav.vue";
import VPSidebar from "./vp-sidebar.vue";
import VPContent from "./vp-content.vue";
import VPSponsors from "./vp-sponsors.vue";

const [isSidebarOpen, toggleSidebar] = useToggle(false);
const { hasSidebar } = useSidebar();

useToggleWidgets(isSidebarOpen, () => {
  if (!isClient) return;
  if (window.outerWidth >= breakpoints.lg) {
    toggleSidebar(false);
  }
});

const scrollRef = ref<Element>();

const handleSidebarClick = () => {
  toggleSidebar(false);
  if (scrollRef.value) {
    scrollRef.value?.scrollTo({ top: 0 });
  }
};

onMounted(async () => {
  if (!isClient) return;
  window.addEventListener(
    "click",
    (e) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const { protocol, hostname, pathname, target } = link;
      const currentUrl = window.location;
      const extMatch = pathname.match(/\.\w+$/);
      // only intercept inbound links
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== ".html")
      ) {
        e.preventDefault();
        if (pathname !== currentUrl.pathname) {
          nprogress.start();
        }
      }
    },
    { capture: true }
  );
  // unregister sw
  navigator?.serviceWorker?.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
});
</script>

<template>
  <el-scrollbar ref="scrollRef" height="100vh" class="App">
    <VPOverlay
      class="overlay"
      :show="isSidebarOpen"
      @click="toggleSidebar(false)"
    />
    <VPNav />
    <VPSubNav v-if="hasSidebar" @open-menu="toggleSidebar(true)" />
    <VPSidebar :open="isSidebarOpen" @close="handleSidebarClick">
      <template #top>
        <VPSponsors />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
    </VPContent>
    <Debug />
  </el-scrollbar>
</template>
