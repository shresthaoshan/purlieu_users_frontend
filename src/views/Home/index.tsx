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
export const Home = () => {
  return (
    <Container>
      <CardPrototype src={kuIdentityCardProtoType} alt="idCard" />
      <PaymentDetails>
        <CardDetailsLabel>Card Details </CardDetailsLabel>
        <Label>Name :</Label>
        <LabelInput placeholder="Enter your name"></LabelInput>
        <Label>Unique ID :</Label>
        <LabelInput placeholder="Enter your name"></LabelInput>
        <Label>Amount :</Label>
        <Amount>
          <LeftRs>Rs.</LeftRs>
          <LabelInput placeholder="Enter Amount" type="number"></LabelInput>
        </Amount>
        <Label style={{ marginTop: "1rem" }}>Pay With :</Label>
        <DigitalMediums>
          <Medium src={EsewaLogo} alt="esewa" />
          <Medium src={KhaltiLogo} alt="khalti" />
          <Medium src={ImeLogo} alt="imePay" />
        </DigitalMediums>
      </PaymentDetails>
    </Container>
  );
};
