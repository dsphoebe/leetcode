/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  var startIdx = 0;
  var endIdx = nums.length - 1;
  var targetIdx;

  // 获取 startIdx、endIdx 值，如果可以则获得 targetIdx 值
  while (startIdx + 1 < endIdx) {
    var middleIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);
    if (target < nums[middleIdx]) {
      endIdx = middleIdx;
    } else if (target > nums[middleIdx]) {
      startIdx = middleIdx;
    } else if (target === nums[middleIdx]) {
      targetIdx = middleIdx;
      break;
    }
  }

  if (targetIdx) {
    return targetIdx;
  }

  // startIdx、endIdx 获取最终 targetIdx 值
  if (target === nums[startIdx]) {
    targetIdx = startIdx;
  } else if (target === nums[endIdx]) {
    targetIdx = endIdx;
  } else if (target > nums[endIdx]) {
    targetIdx = endIdx + 1;
  } else if (target > nums[startIdx]) {
    targetIdx = startIdx + 1;
  } else if (target < nums[startIdx]) {
    targetIdx = startIdx - 1 < 0 ? 0 : startIdx - 1;
  }

  return targetIdx;
};

// console.log(searchInsert([1,4,6,7,8,9], 6))
// searchInsert([1,3,5,6], 2) // 1
// searchInsert([1,3,5,6], 7) // 4
// console.log(searchInsert([1,3,5,6], 0)) // 0
// searchInsert([1,3], 1) // 0

/**
 * 😓 真惨
 * 执行用时: 92 ms, 在Search Insert Position的JavaScript提交中击败了33.93% 的用户
 * 内存消耗: 33.5 MB, 在Search Insert Position的JavaScript提交中击败了0.56% 的用户
 */
