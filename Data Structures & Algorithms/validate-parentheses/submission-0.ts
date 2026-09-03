class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        const openChars = ["(", "[", "{"];

        for (let char of s) {
            if (openChars.includes(char)) {
                stack.push(char);
            } else {
                if (char === ")" && stack[stack.length - 1] === "(") {
                    stack.pop();
                } else if (char === "]" && stack[stack.length - 1] === "[") {
                    stack.pop();
                } else if (char === "}" && stack[stack.length - 1] === "{") {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
