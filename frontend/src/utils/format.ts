export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount);
};

export const formatNumber = (val: number): string => {
  return new Intl.NumberFormat('en-US').format(val);
};
