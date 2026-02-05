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

/**
 * check empty for value
 * note: 
 * !value -> (null, undefined, "", 0, false): check falsy
 * !value?.trim() -> (null + empty + space)
 *  */
export function isEmpty(value) {
    return (
        value === null ||
        value === undefined ||
        (typeof value === "string" && value.trim() === "") ||
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === "object" &&
            !Array.isArray(value) &&
            Object.keys(value).length === 0)
    );
};