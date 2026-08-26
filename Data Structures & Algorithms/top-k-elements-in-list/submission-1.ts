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

        const numsFrequencyBucket: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

        numsFrequency.forEach((frequency, number) => {
            numsFrequencyBucket[frequency].push(number);
        });

        const result: number[] = [];

        for (let i = numsFrequencyBucket.length - 1; i > 0; i--) {
            if (numsFrequencyBucket[i].length > 0) {
                for (let number of numsFrequencyBucket[i]) {
                    result.push(number);
                    if (result.length === k) {
                        return result;
                    }
                }
            }
        }

        return [];
    }
}
