class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            let leftChar = s[left];
            let rightChar = s[right];

            if (!/[0-9a-zA-Z]/.test(leftChar)) {
                left++;
            } else if (!/[0-9a-zA-Z]/.test(rightChar)) {
                right--;
            } else if (leftChar.toLowerCase() === rightChar.toLowerCase()) {
                left++;
                right--;
            } else {
                return false;
            }
        }

        return true;
    }
}
