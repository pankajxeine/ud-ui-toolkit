// ud-ui-toolkit
import { IChip } from "../Chip/IChip";
import { IReadOnlyFeild } from "../ReadonlyField/IReadOnlyField";
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
