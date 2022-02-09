import * as Styled from "./Card.styles";
import { PropsWithChildren } from "react";

interface CardProps {
  children?: JSX.Element;
}

export const Card = ({
  children,
  ...props
}: PropsWithChildren<CardProps>): JSX.Element => {
  return <Styled.Card {...props}>{children}</Styled.Card>;
};
