import * as Styled from "./Card.styles";
import { PropsWithChildren } from "react";

interface CardProps {
  children?: JSX.Element;
  onClick?: (e?: any) => void;
}

export const Card = ({
  children,
  onClick,
  ...props
}: PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <Styled.Card {...props} onClick={onClick}>
      {children}
    </Styled.Card>
  );
};
