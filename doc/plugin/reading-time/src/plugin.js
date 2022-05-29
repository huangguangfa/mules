import { getLocales } from "vuepress-shared";

import { readingTimeLocales } from "./locales";
import { getReadingTime } from "./reading-time";


/** Reading time plugin */
export const readingTimePlugin =
  (options) =>
    (app) => {
      return {
        name: "vuepress-plugin-reading-time",

        define: (app) => ({
          READING_TIME_LOCALES: getLocales({
            app,
            name: "reading-time",
            default: readingTimeLocales,
            config: options.locales,
          }),
        }),

        extendsPage: (page) => {
          page.data.readingTime = getReadingTime(
            page.content,
            options.wordPerMinute || 300
          );
        },
      };
    };
