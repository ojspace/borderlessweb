module.exports = function(eleventyConfig) {
  // Copy static assets directly to _site output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy existing static pages and their assets to output
  eleventyConfig.addPassthroughCopy({"static": "/"});

  // Add a collection for English blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort(function(a, b) {
      return b.date - a.date; // Sort by date descending (newest first)
    });
  });

  // Add a collection for Spanish blog posts
  eleventyConfig.addCollection("posts_es", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts-es/*.md").sort(function(a, b) {
      return b.date - a.date; // Sort by date descending (newest first)
    });
  });

  // Date filter for readable dates (English)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Date filter for readable dates (Spanish)
  eleventyConfig.addFilter("readableDateEs", dateObj => {
    return new Date(dateObj).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",         // Your Eleventy source files
      output: "_site",      // The generated output folder
      includes: "_includes", // Template layouts
      data: "_data"         // Data files
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
