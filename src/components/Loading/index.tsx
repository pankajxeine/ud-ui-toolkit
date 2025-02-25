import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

export default function LinearProgressLoading() {
    return (
        <div className="flex w-full h-full justify-center">
            <Box sx={{ width: '30%', margin: 'auto' }}>
                <LinearProgress />
            </Box>
        </div>

    );
}
