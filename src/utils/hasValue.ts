export default function hasValue(object: Record<string, any>): boolean {
    for (let key in object) {
        if (object[key]) {
            return true;
        }
    }
    return false;
}