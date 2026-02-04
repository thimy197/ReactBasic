import dayjs from 'dayjs';
export const DoW_M_D_FORMAT = 'dddd, MMMM D';
export const M_D_FORMAT = 'MMMM D';

export function formatDate(dateTimestamp) {
    return dayjs(dateTimestamp).format(DoW_M_D_FORMAT);
}

export function formatDateFormat(dateTimestamp, format) {
    return dayjs(dateTimestamp).format(format);
}