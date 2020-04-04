import { binarySearch } from "../binarySearch";

describe("BinarySearch", () => {

  it("should search number in sorted array", () => {
    expect(binarySearch([], 1)).toBe(-1);
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([1, 5, 10, 12], 1)).toBe(0);
    expect(binarySearch([-35, -23, -8, 0, 10, 12, 14, 17, 22, 55, 102], 14)).toBe(6);
    expect(binarySearch([-35, -23, -8, 0, 10, 12, 14, 17, 22, 55, 102], 22)).toBe(8);
    expect(binarySearch([-35, -23, -8, 0, 10, 12, 14, 17, 22, 55, 102], -35)).toBe(0);
    expect(binarySearch([-35, -23, -8, 0, 10, 12, 14, 17, 22, 55, 102], -23)).toBe(1);
    expect(binarySearch([-35, -23, -8, 0, 10, 12, 14, 17, 22, 55, 102], 60)).toBe(-1);
  });

  it("should search object in sorted array", () => {
    const sortedArrayOfObjects = [
      { key: 1, value: "value1" },
      { key: 2, value: "value2" },
      { key: 3, value: "value3" },
    ];

    const comparator = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect(binarySearch([], { key: 1 }, comparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 4 }, comparator)).toBe(-1);
    expect(binarySearch(sortedArrayOfObjects, { key: 1 }, comparator)).toBe(0);
    expect(binarySearch(sortedArrayOfObjects, { key: 2 }, comparator)).toBe(1);
    expect(binarySearch(sortedArrayOfObjects, { key: 3 }, comparator)).toBe(2);
  });
});
