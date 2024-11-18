export default function incrementLastTwoDigits(input: string, value: number) {
    if (input.length < 2) return input;
    let prefix = input.slice(0, -2);
    let lastTwoDigits = parseInt(input.slice(-2), 10) + value;
    return prefix + lastTwoDigits.toString().padStart(2, '0');
}