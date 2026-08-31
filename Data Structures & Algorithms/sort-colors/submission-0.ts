class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        let left = 0;
        let right = nums.length - 1;

        let current = 0;

        while (current <= right) {
            const currentNumber = nums[current];

            if (currentNumber === 0) {
                const leftNumberToMove = nums[left];
                nums[left] = currentNumber;
                nums[current] = leftNumberToMove;

                left++;
                current++;
            } else if (currentNumber === 2) {
                const rightNumberToMove = nums[right];
                nums[right] = currentNumber;
                nums[current] = rightNumberToMove;

                right--;
            } else {
                current++;
            }
        }
    }
}
