import { useAppContext } from "./ThemedApp";

import {
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  ListItemText,
} from "@mui/material";

import { Delete as DeleteIcon } from "@mui/icons-material";

const styles = {
  display: "flex",
  justifyContent: "space-between",
  padding: 20,
  borderBottom: "1px solid transparent",
};

export default function Item({ item, remove }) {
  const { mode } = useAppContext();

  return (
    <ListItem>
      <ListItemText primary={item.content} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => remove(item.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
