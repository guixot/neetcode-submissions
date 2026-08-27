class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array<number>(nums.length);

        result[0] = 1;

        for (let i = 1; i < nums.length; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        let rightProduct = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return result;
    }
}
