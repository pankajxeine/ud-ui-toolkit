// ud-ui-toolkit
import React from "react";
import { NavigationContext } from '../context';
import { getItemPath, getItemTitle, matchPath } from "../helpers/navigation";
import { Breadcrumb } from "../types/ICommon";

export interface ActivePage {
  title: string;
  path: string;
  breadcrumbs: Breadcrumb[];
}

export const useActivePage = (
  pathname: string
): ActivePage | null => {
  const navigation = React.useContext(NavigationContext);
  const activeItem = matchPath(navigation, pathname);
  const rootItem = matchPath(navigation, "/");

  return React.useMemo(() => {
    if (!activeItem) {
      return null;
    }

    const breadcrumbs: Breadcrumb[] = [];

    if (rootItem) {
      breadcrumbs.push({
        title: getItemTitle(rootItem),
        path: "/",
      });
    }

    const segments = pathname.split("/").filter(Boolean);
    let prefix = "";
    for (const segment of segments) {
      const path = `${prefix}/${segment}`;
      prefix = path;
      const item = matchPath(navigation, path);
      if (!item) {
        continue;
      }
      const itemPath = getItemPath(navigation, item);
      const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
      if (lastCrumb?.path !== itemPath) {
        breadcrumbs.push({
          title: getItemTitle(item),
          path: itemPath,
        });
      }
    }

    return {
      title: getItemTitle(activeItem),
      path: getItemPath(navigation, activeItem),
      breadcrumbs,
    };
  }, [activeItem, rootItem, pathname, navigation]);
};
