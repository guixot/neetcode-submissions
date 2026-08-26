class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = new Map<string, string[]>();
        for (let str of strs) {
            const alphabeticalCode = this.convertToAlphabetCode(str);
            if (result.has(alphabeticalCode)) {
                const groupedAnagrams = result.get(alphabeticalCode)!;
                groupedAnagrams.push(str);
                result.set(alphabeticalCode, groupedAnagrams!);
            } else {
                result.set(alphabeticalCode, [str]);
            }
        }
        return [...result.values()];
    }

    convertToAlphabetCode(str: string): string {
        let result = Array<number>(26).fill(0);
        for (let char of str) {
            const charPosition = char.charCodeAt(0) - "a".charCodeAt(0);
            result[charPosition] = result[charPosition] + 1;
        }
        return result.join(",");
    }
}
