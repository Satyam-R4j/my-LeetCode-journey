//Satyam-R4j-LeetCode Problem-211 (medium)
//Solution in JavaScript
var WordDictionary = function () {
    this.children = {};
    this.isEnd = false;
};

WordDictionary.prototype.addWord = function (word) {
    let node = this;
    for (const ch of word) {
        if (!node.children[ch]) {
            node.children[ch] = new WordDictionary();
        }
        node = node.children[ch];
    }
    node.isEnd = true;
};

WordDictionary.prototype.search = function (word) {
    function dfs(node, i) {
        if (i === word.length) return node.isEnd;
        const ch = word[i];

        if (ch === '.') {
            for (const child of Object.values(node.children)) {
                if (dfs(child, i + 1)) return true;
            }
            return false
        } else {
            if (!node.children[ch]) return false;
            return dfs(node.children[ch], i + 1);
        }
    }

    return dfs(this, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// //Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [      [],          ["bad"], ["dad"],  ["mad"],  ["pad"], ["bad"], [".ad"],  ["b.."]]
//Output [null,        null,      null,     null,    false,    true,    true,    true]
//
