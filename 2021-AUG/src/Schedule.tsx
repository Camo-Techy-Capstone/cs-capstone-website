import React, { ReactElement } from 'react';
import { Container, Typography, Table, TableContainer, Paper, TableRow, TableHead, TableBody, TableCell } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";





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

type Props = {
    scheduleList: Array<{
        timeSlot?: string,
        firstGroup: {
            name: string,
            teamId?: string,
            link?: string,
        },
        secondGroup: {
            name: string,
            teamId?: string,
            link?: string,
        }
    }>,
}


const Schedule = ({
    scheduleList
}: Props): ReactElement => {
    return (
        <Container>
            <Typography variant="h4" component="h2" align="center">
                Symposium Schedule and Link
            </Typography>
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
                        <StyledTableCell component="th" scope="row">{row.timeSlot}</StyledTableCell>
                        <StyledTableCell align="right">{row.firstGroup.name}</StyledTableCell>
                        <StyledTableCell align="right">{row.secondGroup.name}</StyledTableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
};

export default Schedule;

