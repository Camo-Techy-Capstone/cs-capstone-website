import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { styled } from '@material-ui/core/styles'

const GreetingTitle = styled(Typography)({
  fontSize: `28px`,
});

const GreetingBody = styled(Typography)({
  marginTop: `4px`,
  marginBottom: `4px`,
});

const greetingFromSaryta = [
  `Welcome to the 2021 Information and Computer Systems and Interactive Media Developer Capstone Symposium.`,
  `This year’s participants have endured many challenges. We switched from in-person to online instruction over a weekend, using new technology and approaches to deliver course content while trying to remain supportive and present. Many students worked tirelessly with Faculty to help implement technology that made this all possible. This last year and a half has affected us all in different ways but this group has demonstrated through their perseverance that while the world was on hold, their future wouldn’t wait.
  `,
  `This event has traditionally been for the Information and Computer Systems students, this year we welcome the Interactive Media Developer students as well. Working hand in hand, these two areas of study complimented each other extremely well and have produced some of our best Capstone projects yet.`,
  `This capstone experience is made possible with support of our industry sponsors, commitment from the faculty and, most importantly, our graduates. Today we will witness the culmination of our students’ ability to apply their knowledge, for some this is their first industry project, for others it represents the honing of existing skills but at Camosun, this is an honoured rite-of-passage.`,
  `I’d like to thank each of you for taking the time and bringing your interest and expertise to this online event. I’d also like to express gratitude to Checkfront for their generous donation to the symposium and for sponsoring Capstone Symposium Award.`,
  `We ask you enjoy yourself today. You’re among the first to see the creativity and capability of new members of our industry.`,
  `These Technologists are our industry’s greatest asset. Each one has skill and professionalism beyond their experience and each one now looks to industry for a foundation from which to thrive.`
];

// TODO: work out a better signature for Saryta
const CapstoneWelcome = () => {
  return (
    <Grid container spacing={3}>
      {greetingFromSaryta.map((paragraph, index) => {
        if (index === 0) {
          return <GreetingTitle variant="h1">{paragraph}</GreetingTitle>
        } else {
          return <GreetingBody variant="body1">{paragraph}</GreetingBody>
        }
      })}
      <p>Saryta Schaerer | Chair | Computer Science Department | School of Trades and Technology</p>
    </Grid>
  );
};

export default CapstoneWelcome;
