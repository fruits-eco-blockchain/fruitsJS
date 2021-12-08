"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _seedrandom = require("seedrandom");
const words_1 = require("./words");
const seedrandom = _seedrandom.default || _seedrandom;
class PassPhraseGenerator {
    constructor() {
        seedrandom();
        this.seed = [];
    }
    generate() {
        this.seed.map(element => seedrandom(element, { "entropy": true, "global": true }));
        let randomWords = [];
        for (let i = 0; i < 12; i++) {
            let number = Math.floor((Math.random() * PassPhraseGenerator.wordCount) + 1);
            randomWords.push(words_1.words[number]);
        }
        return randomWords;
    }
    reSeed(seed) {
        this.seed = seed;
    }
    generatePassPhrase(seed = []) {
        return new Promise((resolve, reject) => {
            this.reSeed(seed);
            resolve(this.generate());
        });
    }
}
exports.PassPhraseGenerator = PassPhraseGenerator;
PassPhraseGenerator.wordCount = words_1.words.length;
//# sourceMappingURL=passPhraseGenerator.js.map