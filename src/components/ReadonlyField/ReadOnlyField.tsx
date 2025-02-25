import { IReadOnlyFeild } from "./IReadOnlyField";
import BoxBasic from "../Box/Box";
import Typography from "../Typography/Typography";
import { Chip } from "../Chip";
import { Link } from "../Link";

/**
 *
 * @param props
 * @returns
 */
const ReadOnlyField = ({
  direction = "column",
  fieldName,
  fieldValue,
  fontColor,
  link,
  isChip = false,
  ...props
}: IReadOnlyFeild) => {
  return (
    <BoxBasic
      component="section"
      sx={{ display: "flex", flexDirection: direction }}
    >
      <Typography
        variant="body2"
        className={props.fieldClassName}
        title={fieldName}
        color={fontColor || "textSecondary"}
        gutterBottom
        sx={{
          pr: direction == "row" ? 2 : 0,
          fontWeight: props.mode,
          alignContent: "center",
        }}
      >
        {fieldName}
      </Typography>
      {isChip ? (
        <Chip title={fieldValue} variant={"filled"} />
      ) : link ? (
        <Link href={link.href} color={"primary"} onClick={link.onClick}>
          {link.text}
        </Link>
      ) : (
        <Typography
          variant="subtitle2"
          className={props.valueClassName}
          title={fieldValue}
          color={fontColor || "textPrimary"}
          gutterBottom
          sx={{
            p: 0,
            m: 0,
            fontWeight: props.mode == "bold" ? "light" : "bold",
          }}
        >
          {fieldValue}
        </Typography>
      )}
    </BoxBasic>
  );
};

export default ReadOnlyField;
