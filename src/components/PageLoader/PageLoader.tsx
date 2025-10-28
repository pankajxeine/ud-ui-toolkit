// ud-ui-toolkit
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import styled from 'styled-components';
import { Stack } from '../Stack';

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