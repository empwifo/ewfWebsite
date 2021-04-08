const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (config) => {
    config.addPlugin(syntaxHighlight);
    config.addPassthroughCopy({"src/assests": "assets"});
    config.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_seperator: "<!-- excerpt -->"
    });
    config.setTemplateFormats(["jpg", "png", "webp", "md", "njk"]);
    config.setBrowserSyncConfig({
        files: ["dist/**/*"],
        open: false
    });
    config.setDataDeepMerge(true);

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        markdownTemplateEngine: 'njk'
    }
}
