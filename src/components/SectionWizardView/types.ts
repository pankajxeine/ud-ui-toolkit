import { IReadOnlyFeild } from "../ReadonlyField/IReadOnlyField";
import { IChip } from "../Chip/IChip";
export interface IFields {
  options: IReadOnlyFeild;
}
export interface IStatusSection {
  title: string;
  options: IChip[];
}
export interface ISubsection {
  statusSection?: IStatusSection;
  section?: IFields[];
  isFullScreen?: boolean;
  footer?: React.ComponentType;
}
export interface ISectionWizardViewProps {
  header?: {
    title: string;
  };
  subsections?: ISubsection[];
}
