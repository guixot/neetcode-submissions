class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let positionsMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const currentNumber = nums[i];
            const difference = target - currentNumber;
            if (positionsMap.has(difference)) {
                return [positionsMap.get(difference), i];
            }
            positionsMap.set(currentNumber, i);
        }

        return [];
    }
}
