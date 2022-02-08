import { PropsWithChildren } from "react";
import * as Styled from "./Button.styles";
// interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }
interface ButtonProps {
  variant?: "primary" | "text" | "default";
  shape?: "round" | "default";
  size?: "dense" | "small" | "medium" | "large";
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "default",
  size = "medium",
  shape = "default",
  fullWidth = false,
  children,
  disabled,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Styled.Button
      disabled={disabled ? disabled : false}
      variant={variant}
      size={size}
      shape={shape}
      fullWidth={fullWidth}
      {...props}
      onClick={onClick}
    >
      {children}
    </Styled.Button>
  );
};
