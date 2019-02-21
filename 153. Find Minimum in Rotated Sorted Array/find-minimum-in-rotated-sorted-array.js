/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length === 0 || nums === null) {
    return -1;
  }

  var start = 0;
  var end = nums.length - 1;
  
  if (nums[end] < nums[start]) {
    
    while (start + 1 < end) {
      var mid = start + (end - start) / 2
      if (nums[mid] < nums[end]) {
        start = mid
      } else {
        
      }
    }

  } else {
    return nums[start];
  }

  while (start + 1 < end) {
    var mid = start + (end - start) / 2;

    if (nums[mid] > nums[end] && nums[mid] > nums[start]) {
    }
  }

};