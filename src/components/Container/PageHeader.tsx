import { Breadcrumbs } from "../Breadcrumbs";
import { Link } from "../Link";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import { styled } from "@mui/material";
import { getItemTitle } from "../../helpers/navigation";
import { useActivePage } from "../../hooks/useActivePage";
import { PageHeaderProps } from "./IContainer";

const PageContentHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(2),
}));

export default function PageHeader(props: PageHeaderProps) {
  const { breadcrumbs, title, pathname } = props;

  const activePage = useActivePage(pathname);

  console.log("activePage", activePage);
  const resolvedBreadcrumbs = breadcrumbs ?? activePage?.breadcrumbs ?? [];
  const resolvedTitle = title ?? activePage?.title ?? "";
  console.log("resolvedTitle", resolvedTitle);
  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumb">
        {resolvedBreadcrumbs
          ? resolvedBreadcrumbs.map((item: any, index: number) => {
            return index < resolvedBreadcrumbs.length - 1 ? (
              <Link
                key={item.path}
                //@ts-ignore
                component={Link}
                underline="hover"
                color="inherit"
                href={item.path}
              >
                {getItemTitle(item)}
              </Link>
            ) : (
              <Typography key={item.path} color="inherit">
                {getItemTitle(item)}
              </Typography>
            );
          })
          : null}
      </Breadcrumbs>
      <PageContentHeader>
        {resolvedTitle ? (
          <Typography variant="h4">{resolvedTitle}</Typography>
        ) : null}
      </PageContentHeader>
    </Stack>
  );
}
