import React from "react";
import styled from "styled-components";
import { ProfileImage } from "./ProfileImg";

const UserGridStyled = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 50px;
  grid-template-areas:
    "photo name"
    "photo label"
    "photo description";

  @media (max-width: 990px) {
    grid-template-areas:
      "photo name"
      "label ."
      "description .";
    grid-gap: 10px;
  }
`;

const Photo = styled.div`
  grid-area: photo;
`;
const Name = styled.div`
  grid-area: name;
  font-size: 35px;
  @media (max-width: 990px) {
    align-self: center;
  }
`;
const Label = styled.div`
  grid-area: label;
  font-weight: bold;

  @media (max-width: 990px) {
    padding: 0 20px;
  }
`;
const Description = styled.div`
  grid-area: description;
  max-width: 400px;
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: 990px) {
    padding: 0 20px;
    grid-column: 1/3;
  }
`;

export default function UserGrid() {
  return (
    <UserGridStyled>
      <Photo>
        <ProfileImage />
      </Photo>
      <Name>Image Galley</Name>
      <Label>306 followers</Label>
      <Description>
        Lorem ipsum dolor amet poke intelligentsia retro synth, brunch blog wolf
        snackwave wayfarers sriracha meditation hot chicken neutra hell of. Put
        a bird on it selfies retro, mustache try-hard iPhone shabby chic schlitz
        kale chips ethical coloring book chicharrones venmo pug.
      </Description>
    </UserGridStyled>
  );
}
