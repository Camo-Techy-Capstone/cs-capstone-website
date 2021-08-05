// @flow
import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import teams from "../teams";
import TeamCard from "../TeamCard";
import CapstoneWelcome from "../CapstoneWelcome";

type Props = {};

const Home = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <CapstoneWelcome />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {teams.map((team) => (
          <Box m={2} key={team.name}>
            <TeamCard {...team} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
