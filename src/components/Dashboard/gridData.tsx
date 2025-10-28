// ud-ui-toolkit
import { Avatar } from '../Avatar';

export function renderAvatar(params: any) {
    if (params.value == null) {
        return '';
    }

    return (
        <Avatar
            sx={{
                backgroundColor: params.value.color,
                width: '24px',
                height: '24px',
                fontSize: '0.85rem',
            }}
        >
            {params.value.name.toUpperCase().substring(0, 1)}
        </Avatar>
    );
}

export const columns: any[] = [
    { field: 'received', headerName: 'Received', flex: 1, minWidth: 150 },
    {
        field: 'trackingNumber',
        headerName: 'Tracking Number',
        flex: 1.2,
        minWidth: 200,
        renderCell: (params: any) => (
            <a href={`#`} style={{ color: '#1976d2', textDecoration: 'none' }}>
                {params.value}
            </a>
        ),
    },
    { field: 'applicantName', headerName: 'Applicant Name', flex: 1, minWidth: 200 },
    { field: 'benefits', headerName: 'Benefits/Public Assistance', flex: 1, minWidth: 200 },
];

export const rows: any[] = [
    { id: 1, received: 'MM/DD/YYYY 3:02 PM', trackingNumber: 'CM8Z-IHAC-0PVA', applicantName: 'Harold Black', benefits: 'Yes' },
    { id: 2, received: 'MM/DD/YYYY 4:33 PM', trackingNumber: 'CM8Z-IHAC-7YTQ', applicantName: 'Kianna Dokidis', benefits: 'Yes' },
    { id: 3, received: 'MM/DD/YYYY 6:32 AM', trackingNumber: 'CM8Z-IHAC-6TYU', applicantName: 'Jocelyn Donin', benefits: 'No' },
    { id: 4, received: 'MM/DD/YYYY 5:49 PM', trackingNumber: 'CM8Z-IHAC-004R', applicantName: 'Jaxson Stanton', benefits: 'Yes' },
    { id: 5, received: 'MM/DD/YYYY 12:12 PM', trackingNumber: 'CM8Z-IHAC-6TYU', applicantName: 'Emerson Kenter', benefits: 'Yes' },
    { id: 6, received: 'MM/DD/YYYY 1:15 PM', trackingNumber: 'CM8Z-IHAC-004R', applicantName: 'Marley Vaccaro', benefits: 'No' },
    { id: 7, received: 'MM/DD/YYYY 9:45 AM', trackingNumber: 'CM8Z-IHAC-3XYZ', applicantName: 'Olivia Johnson', benefits: 'Yes' },
    { id: 8, received: 'MM/DD/YYYY 8:30 AM', trackingNumber: 'CM8Z-IHAC-8LMN', applicantName: 'Liam Brown', benefits: 'No' },
    { id: 9, received: 'MM/DD/YYYY 7:20 AM', trackingNumber: 'CM8Z-IHAC-2TUV', applicantName: 'Sophia Lee', benefits: 'Yes' },
    { id: 10, received: 'MM/DD/YYYY 6:15 PM', trackingNumber: 'CM8Z-IHAC-4PQR', applicantName: 'Noah Wilson', benefits: 'No' },
    { id: 11, received: 'MM/DD/YYYY 11:25 AM', trackingNumber: 'CM8Z-IHAC-9JKL', applicantName: 'Ava Garcia', benefits: 'Yes' },
    { id: 12, received: 'MM/DD/YYYY 10:55 AM', trackingNumber: 'CM8Z-IHAC-5DEF', applicantName: 'Elijah Davis', benefits: 'Yes' },
    { id: 13, received: 'MM/DD/YYYY 2:45 PM', trackingNumber: 'CM8Z-IHAC-1GHI', applicantName: 'Mia Martinez', benefits: 'No' },
    { id: 14, received: 'MM/DD/YYYY 3:50 PM', trackingNumber: 'CM8Z-IHAC-7OPQ', applicantName: 'James Taylor', benefits: 'Yes' },
    { id: 15, received: 'MM/DD/YYYY 9:10 AM', trackingNumber: 'CM8Z-IHAC-6UVW', applicantName: 'Isabella Hernandez', benefits: 'Yes' },
    { id: 16, received: 'MM/DD/YYYY 1:45 PM', trackingNumber: 'CM8Z-IHAC-3ABC', applicantName: 'William Moore', benefits: 'No' },
    { id: 17, received: 'MM/DD/YYYY 4:30 PM', trackingNumber: 'CM8Z-IHAC-8RST', applicantName: 'Charlotte Anderson', benefits: 'Yes' },
    { id: 18, received: 'MM/DD/YYYY 2:20 PM', trackingNumber: 'CM8Z-IHAC-5FGH', applicantName: 'Benjamin Jackson', benefits: 'No' },
];

