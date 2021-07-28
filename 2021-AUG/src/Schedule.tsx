import React, { ReactElement } from "react";
import {
  Container,
  Typography,
  Table,
  TableContainer,
  Paper,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Link,
  Box,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    fontsize: 20,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

type TeamInfoType = {
  name: string;
  teamId?: string;
  link?: string;
};

type Props = {
  scheduleList: Array<{
    timeSlot?: string;
    firstGroup: TeamInfoType;
    secondGroup: TeamInfoType;
  }>;
};

const TeamLink = ({ teamInfo }: { teamInfo: TeamInfoType }): ReactElement => {
  if (teamInfo.teamId && teamInfo.link != "#") {
    return <Link href={teamInfo.link}>{teamInfo.name}</Link>;
  } else {
    return <>{teamInfo.name}</>;
  }
};

const Schedule = ({ scheduleList }: Props): ReactElement => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h2" align="center">
          Symposium Schedule and Link
        </Typography>
        <Typography variant="subtitle1" align="center">
          Click a team name below to go to the team.
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Time slot</StyledTableCell>
              <StyledTableCell align="right">First Group</StyledTableCell>
              <StyledTableCell align="right">Second Group</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scheduleList.map((row) => (
              <TableRow key={row.timeSlot}>
                <StyledTableCell component="th" scope="row">
                  {row.timeSlot}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TeamLink teamInfo={row.firstGroup} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <TeamLink teamInfo={row.secondGroup} />
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Schedule;
