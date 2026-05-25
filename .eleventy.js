module.exports = function (eleventyConfig) {
  // Pass assets directory through unaltered
  eleventyConfig.addPassthroughCopy("src/assets");

  // Reverse-sorted posts collection (newest first)
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse();
  });

  // Date filters for post layouts
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  // Limit featured posts to 3 for the homepage
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().slice(0, 10);
  });

  return {
    pathPrefix: "/IDOD/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
