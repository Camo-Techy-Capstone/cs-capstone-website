// @flow
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import slugify from "slugify";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
    objectFit: "scale-down",
  },
  bold: {
    fontWeight: "bold",
  }
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
          image={`/cosc/2021/images/logos/${logo}`}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom className={classes.bold} component="h2">
            {name}
          </Typography>
          <Box maxHeight="60px" textOverflow="ellipsis" overflow="auto">
            <Typography variant="body2" color="textSecondary" component="p">
              {intro}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          <Link
            to={`/teams/${slugify(name)}`}
            style={{ textDecoration: "none" }}
          >
            Learn More
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
