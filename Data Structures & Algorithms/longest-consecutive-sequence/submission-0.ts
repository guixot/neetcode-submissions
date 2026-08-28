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
                let next = 1;
                let currentSerieSize = 1;
                do {
                    if (numsSet.has(currentNumber + next)) {
                        currentSerieSize++;
                        next++;
                    } else {
                        next = 0; // we exit the loop
                        if (currentSerieSize > longestConsecutiveSerieSize) {
                            longestConsecutiveSerieSize = currentSerieSize;
                        }
                    }
                } while (next !== 0);
            }
        });

        return longestConsecutiveSerieSize;
    }
}
