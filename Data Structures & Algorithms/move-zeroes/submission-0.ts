class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let left = 0;
        let right = 0;

        while (right < nums.length) {
            const leftNumber = nums[left];
            const rightNumber = nums[right];

            if (leftNumber === 0 && rightNumber !== 0) {
                nums[left] = rightNumber;
                nums[right] = leftNumber;

                left++;
                right++;
            } else if (rightNumber === 0) {
                right++;
            } else {
                left++;
                right++;
            }
        }
    }
}
