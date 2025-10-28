// ud-ui-toolkit
import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Box, Grid, PageHeader } from "../../index";
import { IHeaderContainer } from "./IContainer";

export default function HeaderContainer({
  enableBreadcrumbs,
  pageTitle,
  toolbarItem,
  breadcrumSeparator,
}: IHeaderContainer) {
  const currentTheme = useTheme();

  const location = useLocation();
  return (
    <Box>
      {(pageTitle || toolbarItem || enableBreadcrumbs) && (
        <Box
          sx={(theme) => ({
            flexGrow: 1,
            px: 4,
            py: 2,
            background: currentTheme.pageHeaderBGColor?.default,
            borderBottom: `${theme.palette.mode === "light" ? "1px solid #E0E0E0" : "1px solid rgba(81, 81, 81, 1)"}`,
          })}
        >
          <Grid container>
            {enableBreadcrumbs && (
              <Grid size={12} paddingBottom={2}>
                <PageHeader
                  pathname={location.pathname}
                  separatorType={breadcrumSeparator}
                />
              </Grid>
            )}
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>{pageTitle}</Grid>
            <Grid
              size={{ xs: 12, sm: 12, md: 6 }}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {toolbarItem}
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
