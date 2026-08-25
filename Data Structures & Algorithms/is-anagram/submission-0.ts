class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let result = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            const sChar = s[i];
            if (result.has(sChar)) {
                let charCount = result.get(sChar) + 1;
                result.set(sChar, charCount);
            } else {
                result.set(sChar, 1);
            }

            const tChar = t[i];
            if (result.has(tChar)) {
                let charCount = result.get(tChar) - 1;
                result.set(tChar, charCount);
            } else {
                result.set(tChar, -1);
            }
        }

        return [...result.values()].every((v) => v === 0);
    }
}
