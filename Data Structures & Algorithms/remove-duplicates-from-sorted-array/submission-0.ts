class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        let result = 1;

        let left = 0;
        let right = 0;

        while (right < nums.length) {
            do {
                right++;
            } while (nums[right] === nums[left]);

            if (right < nums.length) {
                left++;
                nums[left] = nums[right];
                result++;
            }
        }

        return result;
    }
}
