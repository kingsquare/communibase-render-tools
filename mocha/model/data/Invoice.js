module.exports = {
	entityId: '50efe8d088949f3b6300001b',
	data: {
		invoiceNumber: '100001',
		address: {
			countryCode: "NL",
			type: "visit",
			street: "Straatje",
			streetNumber: "12",
			zipcode: "4284VA",
			city: "RIJSWIJK NB"
		},
		date: new Date("2013-01-22T23:00:00.000Z"),
		dayBookNumber: "30",
		firstAddressLine: "Testaanhef",
		invoiceItems: [
			{
				pricePerUnit: 120,
				quantity: 2,
				description: "Contributie voor niks",
				generalLedgerAccountNumber: "8000",
				costCentre: "001",
				taxPercentage: 21
			},
			{
				pricePerUnit: 10,
				quantity: -1,
				description: "Korting voor niks",
				generalLedgerAccountNumber: "8001",
				costCentre: "001",
				taxPercentage: 21
			}
		],
		openAmount: 278.3,
		paymentType: "invoice"
	}
};