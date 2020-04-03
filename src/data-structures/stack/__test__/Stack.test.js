import { Stack } from "../Stack";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should create empty stack", () => {
    expect(stack.list.head).toBeNull();
    expect(stack.isEmpty()).toBe(true);
  });

  it("should peek the last entry", () => {
    expect(stack.peek()).toBe(null);
 
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.peek()).toBe(2);

  });

  it("should check if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should pop the latest entry", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    // pop 3
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);

    // pop 2
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);

    // pop 1
    expect(stack.pop()).toBe(1);
    expect(stack.peek()).toBe(null);

    // No data
    expect(stack.pop()).toBe(null);
    expect(stack.peek()).toBe(null);
  });

  it("should push the entry to top of the stack", () => {
    expect(stack.list.head).toBeNull();

    stack.push(1);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it("should push/pop data objects to/from stack", () => {
    stack.push({key: 'test1', value: 'val1' });
    stack.push({key: 'test2', value: 'val2' });

    expect(stack.pop()).toEqual({key: 'test2', value: 'val2' });
    expect(stack.peek()).toEqual({key: 'test1', value: 'val1' });

    expect(stack.pop()).toEqual({key: 'test1', value: 'val1' });
    expect(stack.peek()).toEqual(null);
  });

  it("should convert stack to an Array", () => {
    expect(stack.toArray()).toEqual([]);

    stack.push({key: 'test1', value: 'val1' });
    stack.push({key: 'test2', value: 'val2' });

    expect(stack.toArray()).toEqual([{key: 'test2', value: 'val2' }, {key: 'test1', value: 'val1' }]);
  });

});
