export const PERCENT_L1 = 30;
export const PERCENT_L2 = 10;

export function calculateTotalPayoutAmount(data = []) {
    return data.reduce(function(acc, rowData) {
        return acc + (rowData.amount || 0);
    }, 0);
}