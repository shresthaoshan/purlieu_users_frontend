import KhaltiCheckout from "khalti-checkout-web";

let config = {
	publicKey: "test_public_key_2e3010b89c654f46a81cefd05d8cb677",
	productIdentity: "1234567890",
	productName: "Purlieu Co",
	productUrl: "http://gameofthrones.com/buy/Dragons",
	eventHandler: {
		onSuccess(payload) {
			console.log(payload);
		},
		onError(error) {
			console.log(error);
		},
		onClose() {
			console.log("widget is closing");
		},
	},
	paymentPreference: ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export const checkout = new KhaltiCheckout(config);
