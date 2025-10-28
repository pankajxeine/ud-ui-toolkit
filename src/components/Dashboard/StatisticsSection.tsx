// ud-ui-toolkit
import { Box } from "../Box";
import { Grid } from "../Grid";
import { StatisticsCard } from "../Statistics";
import { Typography } from "../Typography";

const StatisticsSection = ({ sectionTitle, kpiData }: { sectionTitle: string, kpiData: Array<any> }) => {
    return (
        <Box sx={{ marginBottom: 3 }}>
            {/* Section Title */}
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                {sectionTitle}
            </Typography>

            {/* Render KPI Cards using Grid layout */}
            <Grid container spacing={3}>
                {kpiData.map((kpi, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}
                    >
                        <StatisticsCard
                            title={kpi.title}
                            number={kpi.statisticNumber}
                            percentage={kpi.statisticsPercentage}
                            color={kpi.color}
                        />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
};

export default StatisticsSection;
