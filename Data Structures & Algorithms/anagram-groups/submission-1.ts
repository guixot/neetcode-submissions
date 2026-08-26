class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = new Map<string, string[]>();
        for (let str of strs) {
            const strSorted = str.split("").sort().join("");
            if (result.has(strSorted)) {
                const groupedAnagrams = result.get(strSorted)!;
                groupedAnagrams.push(str);
                result.set(strSorted, groupedAnagrams!);
            } else {
                result.set(strSorted, [str]);
            }
        }
        return [...result.values()];
    }
}
