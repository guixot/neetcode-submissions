class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxArea = 0;

        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            maxArea = Math.max(Math.min(heights[left], heights[right]) * (right - left), maxArea);

            if (heights[right] > heights[left]) {
                left++;
            } else {
                right--;
            }
        }

        return maxArea;
    }
}
