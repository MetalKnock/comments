import {PluralizationRules} from "@/types/pluralize.types";

export function pluralize(
    number: number,
    {one, few, many}: PluralizationRules,
) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        return one;
    }
    if (
        [2, 3, 4].includes(lastDigit) &&
        ![12, 13, 14].includes(lastTwoDigits)
    ) {
        return few;
    }
    return many;
}
