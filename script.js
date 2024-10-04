const map = new Map([
    ["Bittu", 854323200000],
    ["Uncle", 870825600000],
    ["Varmam", 871776000000],
    ["Kesavudu", 884736000000],
    ["Rajyam", 887673600000],
    ["Tejyam", 890006400000],
    ["Aunty", 902448000000],
    ["Dheyyam", 917395200000],
    ["Thaathayya", 929318400000],
    ["Sass", 937612800000],
    ["Chota Bheem", 984096000000]
]);

// Begin - Shamelessly copy-pasted from ChatGPT
function calculateAges(date) {
    const birthDate = new Date(date);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust for negative days (when current day is earlier in the month than the birth date)
    if (days < 0) {
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // Days in the previous month
        days += previousMonth;
        months--;
    }

    // Adjust for negative months (when current month is earlier than birth month in the current year)
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days };
}
// End - Shameless copy-paste

const renderAges = () => {
    const ageElement = document.getElementById("ages");
    let innerText = "";
    map.forEach((value, name) => {
        const { years, months, days } = calculateAges(value);
        innerText = innerText + 
        `</br><span id="name">${name}</span> :
        <span id="calculatedAge">${years} years, ${months} months, ${days} days</span></br>`;
    });
    ageElement.innerHTML = innerText;
}

renderAges();
