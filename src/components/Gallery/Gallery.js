import React from "react";
import styled, { css } from "styled-components";
import UserGrid from "../Profile/UserGrid";
import { Link, useLocation, use } from "react-router-dom";
import { IMAGES } from "../../imageData";
import { Image } from "./ImageView";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
  ${({ cascade }) =>
    cascade &&
    css`
      grid-auto-rows: 200px;
    `}
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: grey;
  width: 50px;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 3px;
  ${({ selected }) =>
    selected &&
    css`
      color: black;
    `};
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 60px;
  margin-bottom: 20px;
`;

const ImageLink = styled(Link)`
  background: no-repeat center/150% url(/img/${({ index }) => index}.jpeg);
  transition: 0.3s opacity;
  ${({ inModal }) =>
    !inModal &&
    css`
      &:hover {
        opacity: 0.7;
      }
    `}
`;

export default function Gallery({ match }) {
  let location = useLocation();
  const cascade = location.search === "?type=cascade";
  console.log(cascade);

  return (
    <div>
      <UserGrid />
      <LinkGrid>
        <TabLink selected={!cascade} to={{ pathname: `${match.url}` }}>
          square
        </TabLink>
        <TabLink
          selected={cascade}
          to={{ pathname: `${match.url}`, search: "?type=cascade" }}
        >
          cascade
        </TabLink>
      </LinkGrid>
      <PhotoGrid cascade={cascade}>
        {IMAGES.map(i => (
          <ImageLink
            key={i.id}
            index={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
          >
            {/* <Image index={i.id} /> */}
          </ImageLink>
        ))}
      </PhotoGrid>
    </div>
  );
}
