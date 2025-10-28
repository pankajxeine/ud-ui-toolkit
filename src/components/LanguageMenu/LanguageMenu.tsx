// ud-ui-toolkit
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { IconifyIcon } from "../IconifyIcon";
import { ILanguages, Language } from "./ILanguages";

const LanguageSelect = ({ languages }: ILanguages) => {
  const [language, setLanguage] = useState(languages[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleFlagButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFlagMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageItemClick = (langItem: Language) => {
    setLanguage(langItem);
    handleFlagMenuClose();
  };

  return (
    <>
      <Tooltip title={`${language.lang} - ${language.code}`}>
        <IconButton
          onClick={handleFlagButtonClick}
          sx={{ fontSize: "h4.fontSize" }}
        >
          <IconifyIcon icon={language.flag} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleFlagMenuClose}
        onClick={handleFlagMenuClose}
        PaperProps={{
          elevation: 2,
          sx: {
            mt: 1.5,
            p: "0 !important",
            width: "auto",
            overflow: "hidden",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {languages.map((langItem) => {
          return (
            <MenuItem
              key={langItem.id}
              onClick={() => handleLanguageItemClick(langItem)}
            >
              <ListItemIcon sx={{ mr: 2, fontSize: "h3.fontSize" }}>
                <IconifyIcon icon={langItem.flag} />
              </ListItemIcon>
              <ListItemText>
                <Typography>{langItem.lang}</Typography>
              </ListItemText>
              <ListItemText>
                <Typography textAlign="right">{langItem.code}</Typography>
              </ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LanguageSelect;
