let adj = [
  "great",
  "big",
  "attractive",
  "bald",
  "beautiful",
  "chubby",
  "handsome",
  "long",
  "magnificent",
  "muscular",
  "plain",
];

let noun = [
  "jogger",
  "racoon",
  "puedes",
  "time",
  "year",
  "people",
  "way",
  "day",
  "man",
  "thing",
  "woman",
  "life",
  "child",
  "world",
  "school",
  "state",
  "family",
  "president",
  "moment",
];

let dom = ["es", "ar", "us", "ve", "co", "com", "net", "io"];
let pronoun = ["i", "you", "he", "she", "it", "we", "they"];

let result = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let found = dom.find((d) => noun[k].endsWith(d));
      if (found) {
        let split = noun[k].split(found);
        console.log(pronoun[i] + adj[j] + split[0] + "." + found);
      } else {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
}
