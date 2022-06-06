module.exports = {
    extends: ['cz'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(.*?)\((.*?)\):\s?(.*)$/,
            headerCorrespondence: [],
        },
    },
    rules: {
        // 'type-empty': [2, 'never'],
        // 'subject-empty': [2, 'never'],
    }
};
