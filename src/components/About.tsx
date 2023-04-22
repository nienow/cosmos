import React from 'react';
import {HeadingText} from "./common/Text";
import {Card} from "./common/Card";

const About = ({}) => {
  return (
    <Card>
      <HeadingText>About</HeadingText>
      <p>Github repo is <a target="_blank"
                           href="https://github.com/nienow/cosmos">https://github.com/nienow/cosmos</a></p>
      <p>All built-in extensions have been manually audited for security purposes, but there are no guarantees.</p>
      <p>Want to build your own editor extension? It's easy. See the <a target="_blank"
                                                                        href="https://randombits.dev/standard-notes/building-extensions">Building
        Extensions Article.</a></p>
      <p>Contact me on <a target="_blank" href="https://discordapp.com/users/806661811143049216">Discord</a> to offer suggestions or new
        extensions to include. </p>
    </Card>
  );
}

export default About
