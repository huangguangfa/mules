import { ensureLang } from "../utils/lang";
import guideLocale from "../i18n/pages/guide.json";
import componentLocale from "../i18n/pages/component.json";
import coreLocale from "../i18n/pages/core.json";

function getGuideSidebar() {
  return Object.fromEntries(
    Object.entries(guideLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => mapPrefix(item, lang)),
    ])
  );
}

function getcoreSideBar() {
  return Object.fromEntries(
    Object.entries(coreLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => {
        const r = mapPrefix(item, lang, "/core");
        return r;
      }),
    ])
  );
}

function getComponentsSideBar() {
  return Object.fromEntries(
    Object.entries(componentLocale).map(([lang, val]) => [
      lang,
      Object.values(val).map((item) => {
        const r = mapPrefix(item, lang, "/component");
        return r;
      }),
    ])
  );
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    "/guide/": getGuideSidebar(),
    "/core/": getcoreSideBar(),
    "/component/": getComponentsSideBar(),
  };
};
type Item = {
  text: string;
  items?: Item[];
  link?: string;
};

function mapPrefix(item: Item, lang: string, prefix = "") {
  if (item.items && item.items.length > 0) {
    return {
      ...item,
      items: item.items.map((child) => mapPrefix(child, lang, prefix)),
    };
  }
  return {
    ...item,
    link: `${ensureLang(lang)}${prefix}${item.link}`,
  };
}

export const sidebars = getSidebars();
