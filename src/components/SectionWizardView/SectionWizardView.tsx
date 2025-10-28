// ud-ui-toolkit
import { Card } from "../Card";
import { Chip } from "../Chip";
import { Divider } from "../Divider";
import { Grid } from "../Grid";
import { ReadOnlyField } from "../ReadonlyField";
import "./SectionWizardView.css";
import { ISectionWizardViewProps, ISubsection } from "./types";

const WizardSubsection = ({ options }: { options: ISubsection }) => {
  const { statusSection, section, footer: Footer, isFullScreen } = options;
  const responsiveColumn = isFullScreen
    ? { xs: 6, sm: 6, md: 12, lg: 12, xl: 12 }
    : 12;

  return (
    <div className="wizard-subsection-container">
      <Grid
        container
        direction="row"
        justifySelf={"baseline"}
        alignItems={"baseline"}
      >
        <div className="chip-title">{statusSection?.title}</div>
        {statusSection?.options.map((data) => (
          <div className="chip-container-style" key={data.title}>
            <Chip title={data.title} variant={data.variant} />
          </div>
        ))}
      </Grid>
      <Grid
        container
        spacing={1}
        padding={2}
        paddingLeft={0}
        columns={responsiveColumn}
      >
        {section?.map((field) => {
          return (
            <Grid
              key={field.options.fieldName}
              size={isFullScreen ? { xs: 3, sm: 3, md: 4, lg: 3, xl: 3 } : 6}
            >
              <ReadOnlyField
                fieldName={field.options.fieldName}
                fieldValue={field.options.fieldValue}
              />
            </Grid>
          );
        })}
      </Grid>
      {Footer && <Footer />}
      <Divider className="wizard-subsection-container-divider" />
    </div>
  );
};

const SectionWizardView = ({
  header,
  subsections,
}: ISectionWizardViewProps) => {
  return (
    <Card>
      <div className="section-wizard-view-container">
        <h2>{header?.title}</h2>
        <div className="section-container">
          {subsections?.map((sectionData, idx) => (
            <WizardSubsection key={idx} options={sectionData} />
          ))}
        </div>
      </div>
    </Card>
  );
};

SectionWizardView.defaultProps = {
  isFullScreen: true,
};

export default SectionWizardView;
