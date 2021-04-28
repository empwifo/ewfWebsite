const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it")

module.exports = (config) => {
    config.addPlugin(syntaxHighlight);
    config.addPassthroughCopy({"src/assests": "assets"});
    config.addPassthroughCopy({"src/scripts": "scripts"});
    config.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_seperator: "<!-- excerpt -->"
    });
    config.setTemplateFormats(["jpg", "png", "webp", "md", "njk", "svg"]);
    config.setBrowserSyncConfig({
        files: ["dist/**/*"],
        open: false
    });
    config.setDataDeepMerge(true);
    config.addFilter("log", value => {
        console.log(value);
    })

    const md = new markdownIt({
        html: true
    });

    config.addFilter("makeBannerBackground", function(banner){
        var image = banner[Math.floor(Math.random() * banner.length)];
        return image
    });

    config.addNunjucksShortcode("markdown", content => `<div class="prose prose-lg">${md.render(content)}</div>`)

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        markdownTemplateEngine: 'njk'
    }
}
