class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const numsAppearances = new Map<number, number>();

        for (let num of nums) {
            if (numsAppearances.has(num)) {
                numsAppearances.set(num, numsAppearances.get(num)! + 1);
            } else {
                numsAppearances.set(num, 1);
            }

            if (numsAppearances.get(num)! >= nums.length / 2) {
                return num;
            }
        }

        return nums[0];
    }
}
