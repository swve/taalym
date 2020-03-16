import Websites from '../data/websites.json';
var jmespath = require("jmespath");

export default class getAnime {
  getBy(level) {
      let websites = Websites;
      var results = jmespath.search(
        websites,
        "[?tags.contains(@, '" + level + "') == `true`]"
      );
      return results
  }

  getAll() {
    let websites = Websites;
    var results = jmespath.search(
      websites,
      "[]"
    );
    return results
  }
}
