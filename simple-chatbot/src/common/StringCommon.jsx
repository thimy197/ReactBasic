import dayjs from 'supersimpledev/dayjs';

export const FORMAT_DATE = 'Hh:mma';
export const FORMAT_DATE_FULL = 'YYYY-MM-DD HH:MM:SS';
export const USER = 'user';
export const BOT = 'bot';
export const EMPLTY_STRING = '';

export function getCurrentDateFormatted(format = FORMAT_DATE_FULL) {
    return dayjs().format(format);
}

