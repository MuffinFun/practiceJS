'use strict';

const formatCurrency = (amount) => {
    return Intl.NumberFormat("en-US").format(+amount);
};
console.log(formatCurrency(2546.2562));

// :/