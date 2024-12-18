const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it")
const fs = require('fs')
const Image = require("@11ty/eleventy-img");

module.exports = (config) => {    
    config.addPlugin(syntaxHighlight);
    //config.addPassthroughCopy({"src/assests": "assets"});
    config.addPassthroughCopy({"src/scripts": "scripts"});
    config.addPassthroughCopy({"src/_redirects": ""});
	config.addPassthroughCopy({"src/assets/documents": "assets/documents"})
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

    config.addFilter("ceil", function(i){
        return Math.ceil(i)
    });

    config.addFilter("filterAfterKey", function(data, key){
        filtered = {}
        data.forEach(element => {
            value_key = element[key]
            if (!(value_key in filtered))
                filtered[value_key] = []                
            filtered[value_key].push(element)
        });

        return filtered
    });

    config.addNunjucksAsyncShortcode("ImageAsync", async function(src, callback) {
        if (!src.startsWith("/src") && !src.startsWith("src"))
            src = "src" + src

        if (src.startsWith("/"))
            src = src.substring(1);
        
        let stats = await Image(src, {
          widths: [null],
          formats: ["webp", "jpg"],
          urlPath: "/assets/images/",
          outputDir: "./dist/assets/images/",
          sharpWebpOptions: {
              "quality": 80
          }
        });

        let srcMain = stats["webp"][0];
    
        return srcMain.url
      });
    
    config.addNunjucksShortcode("ImageSync", function imageShortcode(src) {
        if (!src.startsWith("/src") && !src.startsWith("src"))
            src = "src" + src
        
        if (src.startsWith("/"))
            src = src.substring(1);

        let options = {
            widths: [null],
            formats: ["webp", "jpeg"],
            urlPath: "/assets/images/",
            outputDir: "./dist/assets/images/",
            sharpWebpOptions: {
                "quality": 80
            }
        }
        // generate images, while this is async we don’t wait
        Image(src, options);
      
        let imageAttributes = {
          loading: "lazy",
          decoding: "async",
        };
        // get metadata even the images are not fully generated
        let metadata = Image.statsSync(src, options);
        let srcMain = metadata["webp"][0];
        
        return srcMain.url
    });

    config.addFilter("fallbackImage", function(url, fallbackExtension) {
        url = url.replace(/\.[^/.]+$/, "")
        url = url + "." + fallbackExtension
        return url
    })

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        markdownTemplateEngine: 'njk'
    }
}
