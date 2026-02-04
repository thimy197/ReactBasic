import dayjs from 'dayjs';
export const DoW_M_D_FORMAT = 'dddd, MMMM D';
export const M_D_FORMAT = 'MMMM D';
export const PREPARING = 'PREPARING';
export const SHIPPING = 'SHIPPING';
export const DELIVERED = 'DELIVERED';

export function formatDate(dateTimestamp) {
    return dayjs(dateTimestamp).format(DoW_M_D_FORMAT);
}

export function formatDateFormat(dateTimestamp, format) {
    return dayjs(dateTimestamp).format(format);
}

export function getShippingStatusByPercent(deliveryPercent) {
    if (deliveryPercent < 33) {
        return PREPARING;
    } else if (deliveryPercent < 100) {
        return SHIPPING;
    } else {
        return DELIVERED;
    }
}