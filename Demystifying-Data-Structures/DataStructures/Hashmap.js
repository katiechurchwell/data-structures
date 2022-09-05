const LinkedList = require("./LinkedList");

const NUMBUCKETS = 43;
class Hashmap {
  constructor() {
    this.buckets = Array.from({ length: NUMBUCKETS }, (a) => new LinkedList());
  }

  _hash(str) {
    let hashedKey = "";
    for (let i = 0; i < str.length; i++) hashedKey += str.charCodeAt(i);
    return hashedKey;
  }

  set(key, val) {
    let keyHash = this._hash(key);
    this.buckets[keyHash % NUMBUCKETS].add({ key, val });
  }

  get(key) {
    let foundIt = null;
    this.buckets[this._hash(key) % NUMBUCKETS].traverse((n) =>
      n.key === key ? (foundIt = n.val) : ""
    );
    return foundIt;
  }
}

module.exports = Hashmap;
