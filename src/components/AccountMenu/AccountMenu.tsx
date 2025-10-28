
import Avatar from "@mui/material/Avatar";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IconifyIcon } from "../IconifyIcon";

export interface ProfileMenuItems {
  id: number;
  title: string;
  icon: string;
}

export interface ProfileMenu {
  menus: ProfileMenuItems[];
  profile: any;
}
const ProfileMenu = ({ menus, profile }: ProfileMenu) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Profile">
        <ButtonBase onClick={handleProfileClick} disableRipple>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            aria-controls={open ? "account-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
          >
            <Avatar
              src={profile.image}
              sx={{
                ml: 0.8,
                height: 32,
                width: 32,
                bgcolor: "inherit",
              }}
            />
            <Typography variant="subtitle2">{profile.name}</Typography>
          </Stack>
        </ButtonBase>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        PaperProps={{
          elevation: 2,
          sx: {
            mt: 1.5,
            p: "0 !important",
            width: 240,
            overflow: "hidden",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={handleProfileMenuClose}
          sx={{ "&:hover": { bgcolor: "info.main" } }}
        >
          <Avatar
            src={profile.image}
            sx={{
              bgcolor: "primary.main",
            }}
          />
          <Stack direction="column">
            <Typography variant="body2" fontWeight={500}>
              {profile.name}
            </Typography>
            <Typography
              variant="caption"
              fontWeight={400}
              color="text.secondary"
            >
              {profile.email}
            </Typography>
          </Stack>
        </MenuItem>

        <Divider />

        {menus.map((menu: any) => {
          return (
            <MenuItem
              key={menu.id}
              onClick={handleProfileMenuClose}
              sx={{ py: 1 }}
            >
              <ListItemIcon sx={{ mr: 2, fontSize: "button.fontSize" }}>
                <IconifyIcon icon={menu.icon} />
              </ListItemIcon>
              <Typography variant="body2" color="text.secondary">
                {menu.title}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ProfileMenu;
