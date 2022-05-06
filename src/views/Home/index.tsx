import styled from "styled-components";
import kuIdentityCardProtoType from "../../assets/kuCard.png";
import EsewaLogo from "../../assets/Esewa.png";
import KhaltiLogo from "../../assets/khalti.png";
import ImeLogo from "../../assets/imepay.png";
import {
	Amount,
	CardDetailsLabel,
	CardPrototype,
	Container,
	DigitalMediums,
	Label,
	LabelInput,
	LeftRs,
	Medium,
	PaymentDetails,
} from "../style";
import { useEffect, useState } from "react";
import { checkout } from "../../khalti-checkout";
import axios from "axios";
import apiConfig from "../../config/api.config";

export const Home = () => {
	const [paymentData, setPaymentData] = useState(() => ({
		uniqueId: "",
		amount: 0,
		remarks: "",
	}));

	const updatePaymentData = (field: "uniqueId" | "amount" | "remarks") => (val: string) => {
		setPaymentData({
			...paymentData,
			[field]: val,
		});
	};

	const onKhaltiClick = () => {
		checkout.show({
			amount: paymentData.amount * 100,
			eventHandler: {
				onSuccess: (ev: any) => {
					const { amount, token } = ev;
					axios
						.post(
							apiConfig.API_URL + "/api/verification/khalti",
							{
								amount,
								token,
								remarks: paymentData.remarks,
								receipent: paymentData.uniqueId,
							},
							{
								headers: {
									"x-api-key": apiConfig.API_KEY,
								},
							}
						)
						.then((response: any) => {
							console.log({ response });
						})
						.catch((ex: any) => {
							console.log({ ex });
						});
				},
			},
		});
	};

	return (
		<Container>
			<CardPrototype src={kuIdentityCardProtoType} alt="idCard" />
			<PaymentDetails>
				<CardDetailsLabel>Card Details </CardDetailsLabel>
				<Label>Unique ID :</Label>
				<LabelInput onChange={(e: any) => updatePaymentData("uniqueId")(e.target.value)} placeholder="Enter your name"></LabelInput>
				<Label>Amount :</Label>
				<Amount>
					<LeftRs>Rs.</LeftRs>
					<LabelInput
						onChange={(e: any) => updatePaymentData("amount")(e.target.value)}
						placeholder="Enter Amount"
						type="number"
					></LabelInput>
				</Amount>
				<Label>Remarks:</Label>
				<Amount>
					<LabelInput
						onChange={(e: any) => updatePaymentData("remarks")(e.target.value)}
						placeholder="Remarks"
						type="text"
					></LabelInput>
				</Amount>
				<Label style={{ marginTop: "1rem" }}>Pay With :</Label>
				<DigitalMediums>
					{/* <Medium src={EsewaLogo} alt="esewa" /> */}
					<Medium
						src={KhaltiLogo}
						alt="khalti"
						onClick={(e: any) => {
							onKhaltiClick();
						}}
					/>
					{/* <Medium src={ImeLogo} alt="imePay" /> */}
				</DigitalMediums>
			</PaymentDetails>
		</Container>
	);
};
