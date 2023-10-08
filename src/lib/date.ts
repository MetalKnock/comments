import {
    MILLISECONDS_IN_ONE_SECOND,
    SECONDS_IN_ONE_DAY,
    SECONDS_IN_ONE_HOUR,
    SECONDS_IN_ONE_MINUTE,
    HOURS_RULES,
    MINUTES_RULES,
    Locale,
} from "@/constants/date";
import {pluralize} from "./pluralize";

export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

export function formatDate(date: Date) {
    const now = new Date();

    const diffInSeconds = Math.floor(
        (+now - +date) / MILLISECONDS_IN_ONE_SECOND,
    );

    if (diffInSeconds < SECONDS_IN_ONE_MINUTE) {
        return "сейчас";
    }

    if (diffInSeconds < SECONDS_IN_ONE_HOUR) {
        const minutes = Math.floor(diffInSeconds / SECONDS_IN_ONE_MINUTE);
        return `${minutes} ${pluralize(minutes, MINUTES_RULES)} назад`;
    }

    if (diffInSeconds < SECONDS_IN_ONE_DAY) {
        const hours = Math.floor(diffInSeconds / SECONDS_IN_ONE_HOUR);
        return `${hours} ${pluralize(hours, HOURS_RULES)} назад`;
    }

    return date.toLocaleDateString(Locale.Russia, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}
