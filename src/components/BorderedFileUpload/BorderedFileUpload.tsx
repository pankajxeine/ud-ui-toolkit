
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const BorderedFileUpload = ({ onChange }: any) => {
    const [file, setFile] = useState<any>(null);

    const handleFileChange = (e: any) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
        onChange && onChange(uploadedFile);
    };

    const handleUploadClick = () => {
        document.getElementById('file-input')?.click();
    };

    const handleClearFile = () => {
        setFile(null);
    };

    return (
        <Box
            sx={{
                border: '2px dashed #90caf9',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                backgroundColor: '#f0f8ff',
                cursor: 'pointer',
                maxWidth: 500,
                margin: 'auto'
            }}
            onClick={handleUploadClick}
        >
            <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="*/*"
            />
            {!file ? (
                <>
                    <CloudUploadIcon color="primary" sx={{ fontSize: 50 }} />
                    <Typography variant="body1" color="textSecondary" mt={1}>
                        Click or drag a file here to upload
                    </Typography>
                </>
            ) : (
                <>
                    <Typography variant="body1" color="textPrimary" gutterBottom>
                        {file.name}
                    </Typography>
                    <Box display="flex" justifyContent="center" gap={2} mt={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<CloudUploadIcon />}
                            onClick={handleUploadClick}
                        >
                            Change File
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={handleClearFile}
                        >
                            Remove
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default BorderedFileUpload;
