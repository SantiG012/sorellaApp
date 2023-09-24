export class CapitalizerUtil {
    constructor() { }

    static capitalize(word: string) {
        const isString = this.validateString(word);

        if (!isString) return "";

        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    private static validateString(word: string):boolean {
        if (typeof word !== 'string') {
            return false;
        }

        return true;
    }
}