const Hashmap = require("./DataStructures/Hashmap");

let hm = new Hashmap();

hm.set("AWD8345", "Black Sprinter Van");
hm.set("AWd8345", "Green Sprinter Van");
hm.set("AGD8345", "White Sprinter Van");
hm.set("AW38345", "Black sedan");
hm.set("AWh8345", "Black smart car");
hm.set("AWw8345", "motorcycle");
hm.set("AWD7345", "Vespa");
hm.set("AWD8945", "Geo Metro");
hm.set("AWD8305", "Jetski");
console.log(hm);

console.log(hm.get("AWD7345"));
console.log(hm.get("AWD8305"));
