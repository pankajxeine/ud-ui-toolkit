import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import clsx from 'clsx';
import { useLayoutEffect, useEffect, useState } from 'react';
import { IconButton } from '../../IconButton';

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const FullScreenToggle = (props: any) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    function getBrowserFullscreenElementProp() {
        if (typeof document.fullscreenElement !== 'undefined') {
            return 'fullscreenElement';
        }
        throw new Error('fullscreenElement is not supported by this browser');
    }

    useEnhancedEffect(() => {
        document.onfullscreenchange = () =>
            //@ts-ignore
            setIsFullScreen(document[getBrowserFullscreenElementProp()] != null);

        return () => {
            document.onfullscreenchange = null;
        };
    });



    /* View in fullscreen */
    function openFullscreen() {
        const elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    }

    /* Close fullscreen */
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    function toggleFullScreen() {
        if (
            document.fullscreenElement
        ) {
            closeFullscreen();
        } else {
            openFullscreen();
        }
    }

    return (
        <IconButton
            tooltipTitle='Fullscreen toggle'
            onClickHandler={toggleFullScreen}
            className={clsx('w-40 h-40', props.className)}>
            {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
        </IconButton>
    );
};

export default FullScreenToggle;
