import React from "react";
import { SxProps, ContainerProps } from "@mui/material";

export interface Breadcrumb {
  title: string;
  path: string;
}

export interface PageContainerSlots {
  header: React.ElementType;
}

export interface PageContainerProps extends ContainerProps {
  children?: React.ReactNode;
  title?: string;
  breadcrumbs?: Breadcrumb[];
  slots?: PageContainerSlots;
  sx?: SxProps;
}

export interface PageHeaderProps {
  title?: string;
  breadcrumbs?: Breadcrumb[];
  pathname: string;
  separatorType?: string;
}

export interface IHeaderContainer {
  pageTitle?: React.ReactNode;
  toolbarItem?: React.ReactNode;
  enableBreadcrumbs?: boolean;
  breadcrumSeparator?: string;
  children?: React.ReactNode
}