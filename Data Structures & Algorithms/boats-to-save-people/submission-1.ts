class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a, b) => b - a);

        let left = 0;
        let right = people.length - 1;

        let result = 0;

        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                right--;
            }
            
            left++;
            result++;
        }

        return result;
    }
}
