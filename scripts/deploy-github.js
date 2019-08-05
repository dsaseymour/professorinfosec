const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/dsaseymour/dsaseymour.github.io.git",
    dest: "blog"
  },
  () => {
    console.log("Deploy Complete!");
  }
);
