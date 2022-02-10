import { PropsWithChildren } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { MenuItemProp } from "../../types/menu";

interface MenuProps<T> {
  items: T[];
}

export default function Menu({
  items,
  ...props
}: PropsWithChildren<MenuProps<MenuItemProp>>): JSX.Element {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }} {...props}>
      <MenuList>
        {items.map((item: MenuItemProp, idx: number) => {
          return (
            <MenuItem key={idx} onClick={item.action ? item.action : undefined}>
              {item.icon ? item.icon : null}
              <ListItemText>{item.title}</ListItemText>
              {item.secondaryTitle ? (
                <Typography variant="body2" color="text.secondary">
                  {item.secondaryTitle}
                </Typography>
              ) : null}
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
}
