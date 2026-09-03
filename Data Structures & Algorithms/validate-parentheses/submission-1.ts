class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

    const pairs: Record<string, string> = {")":"(", "]":"[", "}":"{"};
    
    for (let char of s) {
        if (char in pairs) {
            if (stack[stack.length - 1] === pairs[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
    }
}
