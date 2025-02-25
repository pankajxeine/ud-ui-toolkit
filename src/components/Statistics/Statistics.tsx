import React from "react";
import { useTheme } from "@mui/material";
import { Box } from "../Box";
import { Paper } from "../Paper";  
import { Typography } from "../Typography";
import { StatisticsCardProps } from "./IStatCard";

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  hint,
  number,
  percentage,
  color,
  sxStyles,
}) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        ...sxStyles,
        backgroundColor: color || theme.palette.background.default, 
        elevation: 0,  
        boxShadow: "none",  
        borderRadius: "1rem", 
      }}
    >
      <Box p={2}>
        {/* Title */}
        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: theme.spacing(1), 
            color: '#000',
          }}
        >
          {title}
        </Typography>

        {/* Optional Hint */}
        {hint && (
          <Typography
            variant="body2"
            sx={{
              color: '#000', 
              marginBottom: theme.spacing(2),
            }}
          >
            {hint}
          </Typography>
        )}

        {/* Value and Percentage */}
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
        >
          {/* Statistic Number */}
          <Typography
            variant="h4"
            sx={{
              marginRight: theme.spacing(1),
              color: '#000',
            }}
          >
            {number}
          </Typography>

          {/* Percentage */}
          {percentage && (
            <Typography
              variant="body1"
              sx={{
                color: '#000',
              }}
            >
              ({percentage}%)
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default StatisticsCard;
