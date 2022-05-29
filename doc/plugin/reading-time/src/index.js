
const { getLocales } = require("vuepress-shared");
const { readingTimeLocales } = require("./locales");
const { getReadingTime } = require("./reading-time");

module.exports = (options = {}) => {
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
}
