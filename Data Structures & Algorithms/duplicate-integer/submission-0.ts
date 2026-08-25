class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set();

        for (let number of nums) {
            if (set.has(number)) {
                return true;
            }
            set.add(number);
        }

        return false;
    }
}
