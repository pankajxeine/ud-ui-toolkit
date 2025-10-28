import { Box, Grid, PageHeader, Typography } from "../../index";
import { useActivePage } from "../../hooks/useActivePage";
import { useLocation } from "react-router-dom";
import { IHeaderContainer } from "./IContainer";

export default function HeaderContainer({
    enableBreadcrumbs,
    pageTitle,
    toolbarItem,
    breadcrumSeparator,
    children
}: IHeaderContainer) {
    const location = useLocation();
    return (
        <Box>
            {(pageTitle || toolbarItem || enableBreadcrumbs) && (
                <Box
                    sx={(theme) => ({
                        flexGrow: 1,
                        px: 4,
                        pt: 2,
                        background: theme.pageHeaderBGColor?.default,
                        borderBottom: `${theme.palette.mode === "light" ? "1px solid #E0E0E0" : "1px solid rgba(81, 81, 81, 1)"}`,
                    })}
                >
                    <Grid container>
                        {enableBreadcrumbs && (
                            <Grid size={12} paddingBottom={1}>
                                <PageHeader
                                    pathname={location.pathname}
                                    separatorType={breadcrumSeparator}
                                />
                            </Grid>
                        )}
                        <Grid size={{ xs: 12, sm: 12, md: 6 }} paddingBottom={1}>
                            {pageTitle ?
                                pageTitle :
                                <Typography variant="h4" component="h4">
                                    {useActivePage(location.pathname)?.title}
                                </Typography>
                            }
                        </Grid>
                        <Grid
                            size={{ xs: 12, sm: 12, md: 6 }}
                            sx={{ display: "flex", justifyContent: "space-between" }}
                        >
                            {toolbarItem}
                        </Grid>
                    </Grid>
                    {children}
                </Box>
            )}
        </Box>
    );
}