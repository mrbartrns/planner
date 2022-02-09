export interface MenuItemProp {
  title: string;
  secondaryTitle: string;
  icon?: JSX.Element;
  action?: () => void;
}
