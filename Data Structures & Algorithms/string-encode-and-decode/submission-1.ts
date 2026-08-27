class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = ""

        strs.forEach(str => {
            result += str.length + "#" + str
        });

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];

        let p = 0;

        let currentStringCharCount = "";

        while (p < str.length) {
            let currentChar = str[p];

            if (currentChar === "#") {
                p++;
                result.push(str.slice(p, p + Number(currentStringCharCount)));
                p += Number(currentStringCharCount);
                currentStringCharCount = "";
            } else {
                currentStringCharCount += currentChar;
                p++;
            }
        }

        return result;
    }
}
