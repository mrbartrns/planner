import * as Styled from "./Input.styles";

export const Input = ({ ...props }): JSX.Element => {
  return <Styled.TextInput {...props} />;
};
