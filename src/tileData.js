import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import { Link } from "react-router-dom";

export const mailFolderListItems = (
  <div>
    <Link to="/user" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>

        <ListItemText primary="Users" />
      </ListItem>
    </Link>

    <Link to="/email-template" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>

        <ListItemText primary="Email Template" />
      </ListItem>
    </Link>

    <Link to="/profile" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>

        <ListItemText primary="Profile" />
      </ListItem>
    </Link>

    <Link to="/settings" style={{ textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>

        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
  </div>
);
