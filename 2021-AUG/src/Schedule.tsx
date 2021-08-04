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
  Divider
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles(theme => ({
    dividerWidth: {
        width: '200px',
        margin: '10px auto',
    },
}));

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
    const classes = useStyles();
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h2" align="center">
          Symposium Schedule and Link
        </Typography>
        <Typography variant="subtitle1" align="center">
          To go to the main room, click on either of these links:
        </Typography>
        <Typography variant="subtitle1" align="center">
        {/* will add the link later on */}
          <Link href="#">Main room A</Link> | <Link href="#">Main room B</Link> 
        </Typography>
        <Divider variant="middle" className={classes.dividerWidth}/>
        <Typography variant="subtitle1" align="center">
          Click a team name below to go to the team room.
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Time slot</StyledTableCell>
              <StyledTableCell align="right">Main Room A</StyledTableCell>
              <StyledTableCell align="right">Main Room B</StyledTableCell>
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
