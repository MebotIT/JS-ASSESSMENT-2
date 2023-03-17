<script>
function findTwoNumbers(arr, target) {
    let numMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      
      if (numMap.has(complement)) {
        return [complement, arr[i]];
      } else {
        numMap.set(arr[i], true);
      }
    }
    
    return [];
  }
  </script>