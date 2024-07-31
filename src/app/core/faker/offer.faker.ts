import { Offer } from "@app/modals/offer";

const sampleOffers = [
    "10% Instant Discount upto ₹750 on IDFC Bank Credit and Debit Cards on a min spend of ₹2,500. TCA",
    "7.5% Instant Discount on up to ₹750 every spends with Myntra Kotak Credit Card. TCA",
    "10% Instant Discount upto ₹500 on J&K Bank Mastercard Credit & Debit Cards on a min spend of ₹3,000. TCA",
    "Flat ₹100 Cashback on Fab Money Card on a min spend of ₹1,500. TCA",
    "Get up to ₹200 Assured Cashback on Paytm UPI on a min spend of ₹500. TCA",
    "Get up to ₹500 Cashback on Paytm on transaction with RuPay Credit card via UPI on a min spend of ₹1000. TCA",
    "Get up to ₹500 Cashback on PhonePe on transaction with RuPay Credit card via UPI on a min spend of ₹1000. TCA",
    "Get up to ₹500 Cashback on CRED UPI on a min spend of ₹250. TCA",
    "Get up to ₹1000 Cashback on RuPay Credit Card transaction via CRED UPI on a min spend of ₹300. TCA",
    "Get ₹100 Cashback on transaction with PayZapp on a min spend of ₹2000. TCA",
    "Get up to ₹300 Cashback on Mobikwik UPI on a min spend of ₹1500. TCA",
    "Flat ₹30 Cashback on Freecharge UPI (Android Devices only) on a minimum spend of ₹1,999. TCA",
    "Flat ₹75 Cashback on First Ever Mobikwik Wallet transaction on Myntra on a min spend of ₹999. Use Code MBKNEW on Mobikwik. TCA",
    "Flat ₹100 on Airtel Payments Bank transactions on a min spend of ₹1,000. TCA"
];

export const generateFakeOffer = (): Offer[] => {
    return sampleOffers.map((a, i) => {
        return {
            info: a,
            link: '',
            id: i
        }
    })
}