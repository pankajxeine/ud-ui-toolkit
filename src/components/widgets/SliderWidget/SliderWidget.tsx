
import Slider from '@mui/material/Slider';
import { Icon } from "../../Icon";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import clsx from 'clsx';

type Marks = {
    value: number;
    label: string;
}

export interface SliderWidgetProps {
    className?: string;
    value: number;
    anchorEl: any;
    handleClick: any,
    handleClose: any,
    onChangeCommitted: any;
    onChangeHandler: any;
    widgetTitle: string;
    buttonIcon: string;
    marks: Marks[]
}
function SliderWidget({
    className,
    handleClick,
    handleClose,
    onChangeHandler,
    onChangeCommitted,
    buttonIcon,
    marks,
    anchorEl,
    value,
    widgetTitle
}: SliderWidgetProps) {
    // const [anchorEl, setAnchorEl] = useState(null);
    // const [fontSize, setFontSize] = useState<number>(1);

    // function changeHtmlFontSize() {
    //     const html = document.getElementsByTagName('html')[0];
    //     html.style.fontSize = `${fontSize * 62.5}%`;
    // }

    // const handleClick = (event: any) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <div>
            <IconButton
                className={clsx('w-40 h-40', className)}
                aria-controls="font-size-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Icon iconName={buttonIcon} />
            </IconButton>
            <Menu
                classes={{ paper: 'w-320' }}
                id="font-size-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                //@ts-ignore
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div className="py-12 px-24">
                    <Typography className="flex items-center justify-center text-16 font-semibold mb-8">
                        <Icon color="action" className="mr-4" iconName={buttonIcon} />
                        {widgetTitle}
                    </Typography>
                    <Slider
                        classes={{ markLabel: 'text-12 font-semibold' }}
                        value={value}
                        track={false}
                        aria-labelledby="discrete-slider-small-steps"
                        step={0.1}
                        marks={marks}
                        min={0.7}
                        max={1.3}
                        valueLabelDisplay="off"
                        //@ts-ignore
                        onChange={onChangeHandler}
                        onChangeCommitted={onChangeCommitted}
                    />
                </div>
            </Menu>
        </div>
    );
}

export default SliderWidget;
