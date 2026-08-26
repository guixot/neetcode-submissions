class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsFrequency = new Map<number, number>();
        nums.forEach((num) => {
            if (numsFrequency.has(num)) {
                numsFrequency.set(num, numsFrequency.get(num)! + 1);
            } else {
                numsFrequency.set(num, 1);
            }
        });

        return [...numsFrequency.entries()]
            .sort((a, b) => b[1] - a[1])
            .map((entry) => entry[0])
            .slice(0, k);
    }
}
