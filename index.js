var Crawler = require("node-webcrawler");
var url = require("url");

const idealData = [
  {
    name: "Example Dot Com",
    site: "desktop",
    url: "https://example.com",
    title: "This is the best title ever - Example.com",
    meta:
      "Why settle for a real page when you can visit example.com? It has the best examples!",
    h1: "Example Domain"
  },
  {
    name: "The Example",
    site: "desktop",
    url: "https://en.wikipedia.org/wiki/The_Example",
    title: "The Example - Wikipedia",
    meta:
      "The Example is a Caroline era stage play, a comedy written by James Shirley, first published in 1637.",
    h1: "The Example"
  },
  {
    name: "El Ejemplo",
    site: "desktop",
    url: "https://en.wikipedia.org/wiki/El_Ejemplo",
    title: "El Ejemplo - Wikipedia",
    meta:
      "El Ejemplo (The Example) is a studio album by Mexican recording artists Los Tigres del Norte.",
    h1: "El Ejemplo"
  }
];



const buildCrawler = (idealInfo) => new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, result, $) {
    // $ is Cheerio by default
    //a lean implementation of core jQuery designed specifically for the server
    if (error) {
      console.log(error);
    } else {
      const crawlTitle = $("title").text();
      const title = crawlTitle.trim();
      const crawlHeader = $("h1").text();
      const header = crawlHeader.trim();

      //console.log(idealTitles[counter]);
      //console.log(crawlTitle);
      console.log("Analyzing: " + idealInfo.url);
      console.log("Title: " + title);
      console.log("H1: " + header);
      if (title == idealInfo.title) {
        //console.log("Title is correct");
        console.log("Title matches");
      } else {
        //console.log("Title is incorrect");
        console.log("Title does not match");
      }
      console.log("--------------------------------------");
      //console.log($("title").text());

      //Comparison
    }
  }
});



// Queue a list of URLs
idealData.forEach(item => {
  const c = buildCrawler(item)
  c.queue(item.url);
})


  }
*/
