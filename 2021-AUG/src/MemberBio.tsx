// @flow
import React from "react";
import { Member } from "./types";
import { Box, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  media: {
    height: 150,
    objectFit: "scale-down",
  },
});

type Props = {
  member: Member;
};

const MemberBio = (props: Props) => {
  const {
    member: { name, description, role },
  } = props;

  const classes = useStyles();

  return (
    <Box display="flex">
      <Box width="200px" p={1} pt={2}>
        <CardMedia
          className={classes.media}
          image={`images/faces/${name}.png`}
          title={name}
        />
      </Box>
      <Box width="100%" p={1}>
        <Typography style={{ fontWeight: "bold" }}>
          {name}
          {role ? (
            <Box display="inline" style={{ fontStyle: "italic" }}>
              {` - ${role}`}
            </Box>
          ) : (
            ""
          )}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default MemberBio;
