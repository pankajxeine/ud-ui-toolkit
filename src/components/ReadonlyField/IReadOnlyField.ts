export interface IReadOnlyFeild {
  fieldName: string;
  fieldValue: string;
  link?: {
    href: string;
    text: string;
    onClick?: () => void;
  };
  underline?: "none" | "hover" | "always";
  direction?: "row" | "column";
  fontColor?: string;
  mode?: "light" | "bold";
  iconComp?: React.ComponentType | null;
  isChip?: boolean;
  iconSpacing?: string;
  cssProps?: React.CSSProperties;
  fieldClassName?: string;
  valueClassName?: string;
}
