//Satyam-R4j-LeetCode Problem-208 (medium)
//Solution in JavaScript
var Trie = function() {
    this.children = {}
    this.isCompleted = true = false
};
Trie.prototype.insert = function(word) {
    let node = this
    for (const ch of word) {
        if(!node.children[ch])
        {
            node.children[ch] = new Trie()
        }
        node  = node.children[ch]
    }
    node.isCompleted = true
};
Trie.prototype.search = function(word) {
    let node = this
    for (const ch  of word) {
        if(!node.children[ch]) return false
        node = node.children[ch]
    }
    return node.isCompleted
};
Trie.prototype.startsWith = function(prefix) {
    let node = this
    for (const ch of prefix) {
        if(!node.children[ch]) return false
        node = node.children[ch]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */