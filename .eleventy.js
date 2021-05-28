const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it")
let Nunjucks = require('nunjucks')
require('dotenv').config()


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

    config.addFilter("correct_src_link", function(src) {
        if (!String(src).startsWith("/"))
            return "/" + String(src)
        else
            return src
    })

    config.addNunjucksShortcode("markdown", content => {
        return `
        <div class="container mx-auto flex items-center justify-center mb-8 pt-6">
            <div>  
                <div class="mt-6">
                    <div class="prose sm:prose lg:prose-lg xl:prose-xl">${md.render(content)}</div> 
                </div>
            </div/>
        </div>
        `
    });

    config.addFilter("extendTrim", function(str_arr){
        console.log(str_arr.val);
        for (let index = 0; index < str_arr.length; index++) {
            //console.log(str_arr.val[index])
        }
    })

    config.addFilter("even", function(i){
        if(i % 2 == 0)
            return true
        else
            return false
    })

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        markdownTemplateEngine: 'njk'
    }
}
