import { Box } from "../Box";
import Container from "./Container";;
import { Stack } from "../Stack";
import PageHeader from "./PageHeader";

import { PageContainerProps } from "./IContainer";

const PageContainer = ({ ...props }: PageContainerProps) => {
  const { children, breadcrumbs, title, slots, ...rest } = props;
  const PageHeaderSlot = slots?.header ?? PageHeader;
  return (
    <Container
      {...rest}
      sx={{ flex: 1, display: "flex", flexDirection: "column", ...rest.sx }}
    >
      <Stack sx={{ flex: 1, my: 2 }} spacing={2}>
        {slots?.header && (
          <PageHeaderSlot title={title} breadcrumbs={breadcrumbs} />
        )}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </Box>
      </Stack>
    </Container>
  );
};

export default PageContainer;
