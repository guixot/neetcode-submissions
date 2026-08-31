class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let water = 0;

        let maxLeft = 0;
        let maxRight = 0;

        let left = 0;
        let right = height.length - 1;

        while (left < right) {
            if (height[left] < height[right]) {
                maxLeft = Math.max(maxLeft, height[left]);

                water += Math.max(0, maxLeft - height[left]);

                left++;
            } else {
                maxRight = Math.max(maxRight, height[right]);

                water += Math.max(0, maxRight - height[right]);

                right--;
            }
        }

        return water;
    }
}
