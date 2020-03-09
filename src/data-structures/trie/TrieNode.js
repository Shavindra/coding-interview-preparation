export class TrieNode {

    constructor(character, isComplete = false) {
        this.character = character;
        this.isComplete = isComplete;
        this.children = new Map();
    }

    getChild(character) {
        return this.children.get(character);
    }

    addChild(character, isComplete = false) {
        if(!this.children.has(character)) {
            this.children.set(character, new TrieNode(character, isComplete))
        }

        const childNode = this.children.get(character);
        childNode.isComplete = childNode.isComplete || isComplete;

        return childNode;
    }

    suggestChildren() {
        return Array.from(this.children.keys())
    }

    toString() {
        let childrenAsString = this.suggestChildren().toString();
        childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
        const isComplete = this.isComplete ? '*' : '';
        return `${this.character}${isComplete}${childrenAsString}`;
    }
}