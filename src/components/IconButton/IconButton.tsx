// ud-ui-toolkit
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

type ThemeMode = {
  tooltipTitle: string;
  children: React.ReactNode;
  ariaLabel?: string;
  onClickHandler: () => void;
};
const ThemeSwitcherToggle = ({
  children,
  tooltipTitle,
  ariaLabel,
  onClickHandler,
}: ThemeMode) => {
  return (
    <Tooltip title={tooltipTitle} enterDelay={500}>
      <IconButton aria-label={ariaLabel} onClick={onClickHandler}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcherToggle;
