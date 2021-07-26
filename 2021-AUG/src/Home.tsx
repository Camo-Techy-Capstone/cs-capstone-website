// @flow
import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import teams from "./teams";
import TeamCard from "./TeamCard";
// schedule
import Schedule from "./Schedule";
import getSchedules from "./schedules";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Box display="flex" flexWrap="wrap">
        {teams.map((team) => (
          <Box m={2} key={team.name}>
            <TeamCard {...team} />
          </Box>
        ))}
      </Box>
      <Schedule scheduleList={getSchedules()} />
    </Container>
  );
};

export default Home;
