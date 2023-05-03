const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('da-DK', {
        style: 'currency',
        currency: 'EUR',
    }).format(amount);
}

export default formatPrice;