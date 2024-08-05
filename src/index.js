module.exports = function toReadable(number) {
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    function twoDigitNumber(n) {
        if (n < 10) {
            return numbers[n];
        } else if (n === 10) {
            return "ten";
        } else if (n === 11) {
            return "eleven";
        } else if (n === 12) {
            return "twelve";
        } else if (n === 13) {
            return "thirteen";
        } else if (n === 14) {
            return "fourteen";
        } else if (n === 15) {
            return "fifteen";
        } else if (n < 20) {
            if (n === 18) {
                return "eighteen";
            } else return `${numbers[n % 10]}teen`;
        } else if (n === 20) {
            return "twenty";
        } else if (n < 30) {
            return `twenty ${numbers[n % 10]}`;
        } else if (n === 30) {
            return "thirty";
        } else if (n < 40) {
            return `thirty ${numbers[n % 10]}`;
        } else if (n === 40) {
            return "forty";
        } else if (n < 50) {
            return `forty ${numbers[n % 10]}`;
        } else if (n === 50) {
            return "fifty";
        } else if (n < 60) {
            return `fifty ${numbers[n % 10]}`;
        } else if (n === 60) {
            return "sixty";
        } else if (n < 70) {
            return `sixty ${numbers[n % 10]}`;
        } else if (n === 70) {
            return "seventy";
        } else if (n < 80) {
            return `seventy ${numbers[n % 10]}`;
        } else if (n === 80) {
            return "eighty";
        } else if (n < 90) {
            return `eighty ${numbers[n % 10]}`;
        } else if (n === 90) {
            return "ninety";
        } else if (n < 100) {
            return `ninety ${numbers[n % 10]}`;
        }
    }

    function threeDigitNumber(n) {
        const result = `${
            numbers[Math.floor(n / 100)]
        } hundred ${twoDigitNumber(n % 100)}`;
        if (result.endsWith("zero")) {
            return `${numbers[Math.floor(n / 100)]} hundred`;
        } else
            return `${numbers[Math.floor(n / 100)]} hundred ${twoDigitNumber(
                n % 100
            )}`;
    }

    if (number < 10) {
        return numbers[number];
    } else if (number < 100) {
        return twoDigitNumber(number);
    } else return threeDigitNumber(number);
};