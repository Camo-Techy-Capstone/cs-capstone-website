// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Link } from "@material-ui/core";
import slugify from "slugify";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    objectFit: "scale-down",
  },
});

type Props = {
  name: string;
  intro: string;
  logo: string;
};

const TeamCard = (props: Props) => {
  const classes = useStyles();

  const { name, intro, logo } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{ backgroundSize: "contain" }}
          image={`images/logos/${logo}`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Box maxHeight="58px" textOverflow="ellipsis" overflow="auto">
            <Typography variant="body2" color="textSecondary" component="p">
              {intro}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          <Link href={`/#/teams/${slugify(name)}`}>Learn More</Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
