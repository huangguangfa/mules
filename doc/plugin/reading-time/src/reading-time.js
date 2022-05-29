


/**
 * Extract Latin words from content
 */
const getWords = (content) =>
  content.match(/[\w\d\s,.\u00C0-\u024F]+/giu) || [];

/**
 * Extract Chinese Characters from content
 */
const getChinese = (content) =>
  content.match(/[\u4E00-\u9FD5]/gu) || [];

/**
 * Get word number of given string
 */
const getWordNumber = (content) =>
  getWords(content).reduce(
    (accumulator, word) =>
      accumulator + (word.trim() === "" ? 0 : word.trim().split(/\s+/u).length),
    0
  ) + getChinese(content).length;

/**
 * Get reading time info
 */
const getReadingTime = (
  content,
  wordsPerMinute = 300
) => {
  const words = getWordNumber(content || "");

  return {
    minutes: Math.round((words / wordsPerMinute) * 100) / 100,
    words,
  };
};

module.exports = {
  getWords,
  getChinese,
  getWordNumber,
  getReadingTime
}