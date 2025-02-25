import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { Menu, MenuItem, MenuList } from "..";
import { ListItemIcon } from "../../List";
import { Button } from "../../Button";
import InboxIcon from "@mui/icons-material/Inbox";

export default {
  title: "Components/Menu",
  component: Menu,
} as Meta;

const Template: Story = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu id="menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export const BasicMenu = Template.bind({});

export const IconMenu: Story = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="icon-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Icon Menu
      </Button>
      <Menu
        id="icon-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            Inbox
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            Sent
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            Drafts
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export const DenseMenu: Story = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="dense-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Dense Menu
      </Button>
      <Menu
        id="dense-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList dense>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export const SelectedMenu: Story = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="selected-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Selected Menu
      </Button>
      <Menu
        id="selected-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList>
          <MenuItem selected onClick={handleClose}>
            Selected Item
          </MenuItem>
          <MenuItem onClick={handleClose}>Another Item</MenuItem>
          <MenuItem onClick={handleClose}>Yet Another Item</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
