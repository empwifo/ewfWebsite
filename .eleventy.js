const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it")
const fs = require('fs')
const Image = require("@11ty/eleventy-img");

module.exports = (config) => {    
    config.addPlugin(syntaxHighlight);
    config.addPassthroughCopy({"src/assests": "assets"});
    config.addPassthroughCopy({"src/scripts": "scripts"});
    config.addPassthroughCopy({"src/_redirects": ""});
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
    const md = new markdownIt({
        html: true
    });

    config.addFilter("log", value => {
        console.log(value);
    })    

    config.addFilter("correct_src_link", function(src) {
        if (!String(src).startsWith("/"))
            return "/" + String(src)
        else
            return src
    })

    config.addFilter("inlineSVG", function(src){
        let data = fs.readFileSync("src/" + src, function(err, contents) {  
            if (err) return err  
            return contents  
        });

        return data.toString('utf8')
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

    config.addNunjucksAsyncShortcode("Image", async (src) => {    
        
        if (!src.startsWith("/src") || src.startsWith("src"))
            src = "src" + src

        let stats = await Image(src, {
          widths: [null],
          formats: ["jpeg", "webp", "png"],
          urlPath: "/assets/images/",
          outputDir: "./dist/assets/images/",
        });
        
        let srcOut = stats["webp"][0];   
    
        return srcOut.url;
      });

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        markdownTemplateEngine: 'njk'
    }
}
