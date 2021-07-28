// @flow
import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";

import teams from "./teams";
import slugify from "slugify";
import MemberBio from "./MemberBio";
import Paragraph from "./ParagraphContent";
import { Team } from "./types";

const TeamBios = () => {
  const { slug } = useParams<{ slug: string }>();
  const team: Team | undefined = teams.find(
    ({ name }) => slug === slugify(name)
  );
  if (!team) {
    useHistory().push("/");
    return <></>;
  }

  window.scrollTo(0, 0);

  const { name, logo, opening, closing, members } = team;
  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          {name}
        </Typography>
      </Box>
      {opening.map((paragraph, index) => (
        <Paragraph paragraph={paragraph} key={index} />
      ))}
      <Box>
        {members.map((member) => (
          <Box my={3}>
            <MemberBio member={member} key={member.name} />
          </Box>
        ))}
      </Box>
      {closing.map((paragraph, index) => (
        <Paragraph paragraph={paragraph} key={index} />
      ))}
    </Container>
  );
};

export default TeamBios;
