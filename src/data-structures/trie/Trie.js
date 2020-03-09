import { TrieNode } from './TrieNode';

export class Trie {
    constructor() {
        this.head = new TrieNode('*');
    }

    addWord(word) {
        const characters = Array.from(word);
        let currentNode = this.head;

        for(let i = 0; i < characters.length; i++) {
            const isComplete = i === characters.length - 1;

            currentNode = currentNode.addChild(characters[i], isComplete)
        }

        return this;
    }


}
