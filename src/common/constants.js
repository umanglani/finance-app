import dayjs from 'dayjs';

export const TodayDate = () => {
    return dayjs().format('DD MMM YYYY');
}

export const Vendor = {
    linkedin: 'Linkedin',
    apple: 'Apple',
    facebook: 'Facebook',
    instagram: 'instagram',
    visa: 'Visa'
};

export const TransactionType = {
    cr: 'CR',
    dr: 'DR'
};

export const RecentTransactions = [
    {
        id: 1,
        vendor: Vendor.visa,
        date: dayjs().subtract(6, 'days').format('DD MMM YYYY'),
        amount: 16,
        transactionType: TransactionType.dr
    },
    {
        id: 2,
        vendor: Vendor.linkedin,
        date: dayjs().subtract(8, 'days').format('DD MMM YYYY'),
        amount: 22,
        transactionType: TransactionType.dr
    },
    {
        id: 3,
        vendor: Vendor.apple,
        date: dayjs().subtract(9, 'days').format('DD MMM YYYY'),
        amount: 125,
        transactionType: TransactionType.dr
    },
    {
        id: 4,
        vendor: Vendor.facebook,
        date: dayjs().subtract(11, 'days').format('DD MMM YYYY'),
        amount: 26,
        transactionType: TransactionType.dr
    },
    {
        id: 5,
        vendor: Vendor.instagram,
        date: dayjs().subtract(13, 'days').format('DD MMM YYYY'),
        amount: 21.98,
        transactionType: TransactionType.dr
    },


    // {
    //     id: 6,
    //     vendor: Vendor.visa,
    //     date: dayjs().subtract(6, 'days').format('DD MMM YYYY'),
    //     amount: 16,
    //     transactionType: TransactionType.dr
    // },
    // {
    //     id: 7,
    //     vendor: Vendor.linkedin,
    //     date: dayjs().subtract(8, 'days').format('DD MMM YYYY'),
    //     amount: 22,
    //     transactionType: TransactionType.dr
    // },
    // {
    //     id: 8,
    //     vendor: Vendor.apple,
    //     date: dayjs().subtract(9, 'days').format('DD MMM YYYY'),
    //     amount: 125,
    //     transactionType: TransactionType.dr
    // },
    // {
    //     id: 9,
    //     vendor: Vendor.facebook,
    //     date: dayjs().subtract(11, 'days').format('DD MMM YYYY'),
    //     amount: 26,
    //     transactionType: TransactionType.dr
    // },
    // {
    //     id: 10,
    //     vendor: Vendor.instagram,
    //     date: dayjs().subtract(13, 'days').format('DD MMM YYYY'),
    //     amount: 21.98,
    //     transactionType: TransactionType.dr
    // },
];
