import {PluralizationRules} from "@/types/pluralize.types";

export const MILLISECONDS_IN_ONE_SECOND = 1000;
export const SECONDS_IN_ONE_MINUTE = 60;
export const MINUTES_IN_ONE_HOUR = 60;
export const HOURS_IN_ONE_DAY = 24;
export const SECONDS_IN_ONE_HOUR = SECONDS_IN_ONE_MINUTE * MINUTES_IN_ONE_HOUR;
export const SECONDS_IN_ONE_DAY = SECONDS_IN_ONE_HOUR * HOURS_IN_ONE_DAY;

export const MINUTES_RULES: PluralizationRules = {
    one: "минуту",
    few: "минуты",
    many: "минут",
};
export const HOURS_RULES: PluralizationRules = {
    one: "час",
    few: "часа",
    many: "часов",
};

export enum Locale {
    Russia = "ru-RU",
}
