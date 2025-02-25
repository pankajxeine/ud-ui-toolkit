import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import { Stack } from '../Stack';
import styled from 'styled-components';

const PageLoaderStyle = styled(Stack)({
    height: '100%',
    margin: 'auto',
    width: "50%",
    justifyContent: 'center',
});


const PageLoader = ({ ...rest }: LinearProgressProps) => {
    return (
        <PageLoaderStyle>
            <LinearProgress {...rest} color='inherit' />
        </PageLoaderStyle >
    );
};

export default PageLoader;