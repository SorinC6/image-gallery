import React from "react";
import styled from "styled-components";
import UserGrid from "../Profile/UserGrid";
import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../../imageData";
import { Image } from "./ImageView";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 20px;
`;

export default function Gallery() {
  let location = useLocation();

  return (
    <div>
      <UserGrid />
      <PhotoGrid>
        {IMAGES.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location }
            }}
          >
            <Image index={i.id} />
          </Link>
        ))}
      </PhotoGrid>
    </div>
  );
}
