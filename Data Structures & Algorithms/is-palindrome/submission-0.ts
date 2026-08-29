class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const curatedString = s
            .replace(/[^0-9a-zA-Z]/g, "")
            .trim()
            .toLowerCase();

        let left = 0;
        let right = curatedString.length - 1;

        while (left < right) {
            if (curatedString[left] === curatedString[right]) {
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true;
    }
}
