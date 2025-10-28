// ud-ui-toolkit
import Container from "@mui/material/Container";
import useCreateTheme from "../../hooks/useCreateTheme";
import ThemeProvider from "../AppLayout/ThemeProvider";
import { Box } from "../Box";
import { Stack } from "../Stack";
import { FooterProps } from "./IFooter";

const Footer = ({ children, footerTheme }: FooterProps) => {
  const theme = useCreateTheme(footerTheme);
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="footer"
        sx={{
          mt: "auto",
          borderWidth: 0,
          borderTopWidth: 1,
          borderStyle: "solid",
          borderColor: theme.palette.divider,
        }}
      >
        <Container maxWidth="xl" sx={{ py: 0, px: 0 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {children}
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
