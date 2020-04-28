// transformer en un format plus userfriendly une durée
export const calcTime = time => {
    const hours = Math.floor(time/60);
    const min = time % 60;
    return `${hours}h ${min}m`;
};

// transformer en un format plus userfriendly une somme
export const convertMoney = money => {
    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });
    return formatter.format(money);
};