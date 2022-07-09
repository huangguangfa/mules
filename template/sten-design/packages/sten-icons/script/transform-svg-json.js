const { optimize } = require("svgo");
const { parse } = require("svgson");

function svgo(svgContent, svgFileName) {
  return new Promise((resolve, reject) => {
    try {
      const svgToJSON = () =>
        optimize(svgContent, {
          name: "preset-default",
          params: {
            overrides: {
              convertShapeToPath: {
                convertArcs: true,
              },
              convertPathData: false,
            },
          },
          plugins: [
            {
              name: "convertColors",
              params: { currentColor: /^(?!url|none)./ },
            },
            {
              name: "cleanupListOfValues",
              active: true,
            },
            {
              name: "removeStyleElement",
              active: true,
            },
            {
              name: "removeViewBox",
              active: false,
            },
            {
              name: "removeDimensions",
              active: true,
            },
          ],
        });
      // 彩色不执行去颜色配置
      const checkSvgColor = svgFileName.substr(-6, 2) === "-c";
      parse(checkSvgColor ? svgContent : svgToJSON().data).then((r) =>
        resolve({
          data: r,
          isColor: checkSvgColor,
        })
      );
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = svgo;
