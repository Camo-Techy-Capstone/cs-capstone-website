// @flow
import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { Paragraph } from "./types";
import CheckIcon from "@material-ui/icons/Check";

type Props = {
  paragraph: Paragraph;
};

const ParagraphContent = (props: Props) => {
  const {
    paragraph: { title, content, list },
  } = props;
  return (
    <Box my={3}>
      {title ? (
        <Box my={2}>
          <Typography variant="h5">{title}</Typography>
        </Box>
      ) : (
        ""
      )}
      <Typography>{content}</Typography>
      {list ? (
        <Box mt={1} ml={2}>
          {list.map((text, index) => (
            <Box display="flex" key={index}>
              <Box pr={1}>
                <CheckIcon fontSize="small" />
              </Box>
              {text}
            </Box>
          ))}
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ParagraphContent;
