// ud-ui-toolkit
import { getItemTitle } from "../../helpers/navigation";
import { useActivePage } from "../../hooks/useActivePage";
import { Breadcrumbs } from "../Breadcrumbs";
import { Link } from "../Link";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import { PageHeaderProps } from "./IContainer";


export default function PageHeader(props: PageHeaderProps) {
  const { breadcrumbs, title, pathname, separatorType } = props;

  const activePage = useActivePage(pathname);

  console.log("activePage", activePage);
  const resolvedBreadcrumbs = breadcrumbs ?? activePage?.breadcrumbs ?? [];
  const resolvedTitle = title ?? activePage?.title ?? "";
  console.log("resolvedTitle", resolvedTitle);
  return (
    <Stack>
      <Breadcrumbs aria-label="breadcrumb" separator={separatorType || ">"}>
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
    </Stack>
  );
}
