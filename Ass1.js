function findTwoNumbers(arr, target) {
  const seen = new Set();
  for (let num of arr) {
      const complement = target - num;
          if (seen.has(complement)) {
          return [complement, num];
          }
      seen.add(num);
  }
    return [];
  }
const input1 = [3, 4, 8, 6];
const target1 = 10;
const output1 = findTwoNumbers(input1, target1);
document.write(output1);  

const input2 = [1, 2, 3, 4];
const target2 = 8;
const output2 = findTwoNumbers(input2, target2);
document.write(output2);  