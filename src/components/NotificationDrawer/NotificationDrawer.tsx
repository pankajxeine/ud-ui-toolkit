import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  Box,
  Typography,
  Button,
  Badge,
  Link,
  useMediaQuery,
  Theme,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NotificationDrawerProps } from "./INotificationDrawer";

const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  heading,
  icon,
  type = "icon",
  content,
  tooltipContent,
  showBadge = false,
  badgeContent = 0,
  isClose = true,
  onCloseHandler,
}) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const handleClose = () => {
    if (onCloseHandler) {
      onCloseHandler();
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Trigger (Button, Icon, or Link) */}
      <Tooltip title={tooltipContent} arrow>
        {type === "button" && (
          <Button onClick={() => setOpen(true)} startIcon={<span className="material-icons">{icon}</span>}>
            {heading}
          </Button>
        )}
        {type === "icon" && (
          <IconButton onClick={() => setOpen(true)} sx={{ position: "relative" }}>
            {showBadge ? (
              <Badge
                badgeContent={badgeContent}
                color="error"
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.75rem",
                    height: 18,
                    minWidth: 18,
                  },
                }}
              >
                <span className="material-icons">{icon}</span>
              </Badge>
            ) : (
              <span className="material-icons">{icon}</span>
            )}
          </IconButton>
        )}
        {type === "link" && (
          <Link onClick={() => setOpen(true)}>{heading}</Link>
        )}
      </Tooltip>

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box sx={{ width: isMobile ? "100%" : 320, p: 2 }}>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{heading}</Typography>
            {isClose && (
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            )}
          </Box>

          {/* Dynamic content */}
          <Box mt={2}>{content}</Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NotificationDrawer;
