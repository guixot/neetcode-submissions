class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set<number>(nums);

        let longestConsecutiveSerieSize = 0;

        numsSet.forEach((currentNumber) => {
            if (!numsSet.has(currentNumber - 1)) {
                let currentSerieSize = 1;
                while (numsSet.has(currentNumber + currentSerieSize)) {
                    currentSerieSize++;
                }

                if (currentSerieSize > longestConsecutiveSerieSize) {
                    longestConsecutiveSerieSize = currentSerieSize;
                }
            }
        });

        return longestConsecutiveSerieSize;
    }
}
