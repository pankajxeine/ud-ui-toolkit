// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

type ThemeMode = {
  tooltipTitle: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: any;
  onClickHandler: () => void;

};
const ThemeSwitcherToggle = ({
  children,
  tooltipTitle,
  ariaLabel,
  className,
  onClickHandler,
}: ThemeMode) => {
  return (
    <Tooltip title={tooltipTitle} enterDelay={500}>
      <IconButton aria-label={ariaLabel} onClick={onClickHandler} className={className}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcherToggle;
