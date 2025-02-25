import { Box } from "../Box";
import Container from "./Container";
import { Stack } from "../Stack";
import PageHeader from "./PageHeader";

import { PageContainerProps } from "./IContainer";
import { useTheme } from "@mui/material";
const PageContainer = ({ ...props }: PageContainerProps) => {
  const { children, breadcrumbs, title, slots, ...rest } = props;
  const PageHeaderSlot = slots?.header ?? PageHeader;
  const theme = useTheme();
  return (
    <Container
      {...rest}
      sx={{ flex: 1, display: "flex", flexDirection: "column", ...rest.sx }}
    >
      <Stack sx={{ flex: 1 }}>
        {slots?.header && (
          <PageHeaderSlot title={title} breadcrumbs={breadcrumbs} />
        )}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.pageBodyColor?.default,
            p: 3,
          }}
        >
          {children}
        </Box>
      </Stack>
    </Container>
  );
};

export default PageContainer;
