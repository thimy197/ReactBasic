import dayjs from 'dayjs';
const DAY_FORMAT = 'dddd, MMMM D';

export function formatDate(dateTimestamp) {
    return dayjs(dateTimestamp).format(DAY_FORMAT);
}