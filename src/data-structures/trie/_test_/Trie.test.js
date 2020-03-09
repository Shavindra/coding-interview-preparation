import { Trie } from '../Trie';


describe('Trie', () => {
    let trie;
    beforeEach(() => {
        trie = new Trie();
    });

    it('should create trie', () => {
        expect(trie).toBeDefined();
    });

    it('should have * as default root character', ()=>{
        expect(trie.head.toString()).toBe('*');
    });

    it('should add a word to trie', () => {
        trie.addWord('cat');

        expect(trie.head.toString()).toBe('*:c');
        expect(trie.head.getChild('c').toString()).toBe('c:a');
        expect(trie.head.getChild('c').getChild('a').getChild('t').toString()).toBe('t*')
    });
    
    it('should add multiple words to trie', ()=>{
        trie.addWord('cat');
        trie.addWord('car');
        trie.addWord('cart')

        expect(trie.head.toString()).toBe('*:c');
        expect(trie.head.getChild('c').toString()).toBe('c:a');
        expect(trie.head.getChild('c').getChild('a').toString()).toBe('a:t,r');
        expect(trie.head.getChild('c').getChild('a').getChild('t').toString()).toBe('t*'); // cat
        expect(trie.head.getChild('c').getChild('a').getChild('r').toString()).toBe('r*:t'); // car
        expect(trie.head.getChild('c').getChild('a').getChild('r').getChild('t').toString()).toBe('t*'); // cart
    });
})