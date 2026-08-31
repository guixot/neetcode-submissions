class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            const result = numbers[left] + numbers[right];

            if (result > target) {
                right--;
            } else if (result < target) {
                left++;
            } else {
                return [left + 1, right + 1];
            }
        }

        return [];
    }
}
