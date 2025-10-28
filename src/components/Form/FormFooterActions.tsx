// ud-ui-toolkit
import { useMemo } from "react";
import { FormBottomPropsActionsProps } from "../../types";
import { Box } from "../Box";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Grid } from "../Grid";

export const FormFooterActions = (props: FormBottomPropsActionsProps) => {
  const {
    activeFrom,
    formList,
    formMethods,
    hideActionButtons,
    prevButtonProps,
    nextButtonProps,
    onPreviousForm,
    onNextForm,
    onSubmit,
    otherButtons = [],
  } = props;

  const buttons = useMemo(() => {
    const alButtons = [];
    if (prevButtonProps && !hideActionButtons) {
      const { handler, ...prevBtnProps } = prevButtonProps;
      alButtons.push(
        <Button
          {...prevBtnProps}
          disabled={activeFrom == 0}
          onClick={onPreviousForm}
        >
          {prevButtonProps?.name}
        </Button>,
      );
    }
    if (nextButtonProps && !hideActionButtons) {
      const { handler, ...nextBtnProps } = nextButtonProps;
      alButtons.push(
        <Button
          {...nextBtnProps}
          onClick={onNextForm}
          disabled={activeFrom == formList.length - 1}
        >
          {nextButtonProps?.name}
        </Button>,
      );
    }
    onSubmit &&
      alButtons.push(
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={formMethods.handleSubmit(onSubmit)}
        >
          Submit
        </Button>,
      );
    otherButtons.forEach((button, index) => {
      const { handler, ...buttonProps } = button;
      alButtons.push(
        <Button
          {...buttonProps}
          onClick={typeof handler === "function" ? handler : undefined}
          variant={button.variant}
          color={button.color}
          key={button.name || `other-button-${index}`}
        >
          {button.name}
        </Button>,
      );
    });
    return alButtons;
  }, [
    activeFrom,
    formList,
    onSubmit,
    formMethods,
    hideActionButtons,
    otherButtons,
  ]);

  const leftButtons = buttons.filter((button) => button.props.align === "left");
  // const rightButtons = buttons.filter(
  //   (button) => button.props.align !== "left",
  // );

  return (
    <>
      <Box marginTop={5}>
        <Divider />
      </Box>
      <Grid marginTop={2} container direction={"row"}>
        <Grid size={{ xs: 12, sm: 6, md: 6 }} display={"flex"}>
          {leftButtons.map((button, index) => (
            <Grid key={button.key || `left-button-${index}`}>{button}</Grid>
          ))}
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6, md: 6 }}
          display={"flex"}
          justifyContent={"flex-end"}
          gap={2}
        >
          {leftButtons.length > 0 && (
            <Grid>
              {leftButtons.map((button, index) => (
                <Grid key={button.props.name || index}>{button}</Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};
