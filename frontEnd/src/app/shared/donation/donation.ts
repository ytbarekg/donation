export interface Donation {
    donor: string,
    amount: number,
    beneficiaries: string[],
    payment: {
        method: string, 
        transactionNumber: string,
        amount: string,
        status: string
    }
}