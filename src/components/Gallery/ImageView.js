import React from "react";
import { IMAGES } from "../../imageData";
import { useParams } from "react";
import styled, { css } from "styled-components";

export const Image = styled.div`
  width: 305px;
  height: 305px;
  background: no-repeat center/150% url(./img/${({ index }) => index}.jpeg);
  transition: 0.3s opacity;

  @media (max-width: 990px) {
    width: 100%;
  }
  ${({ inModal }) =>
    !inModal &&
    css`
      &:hover {
        opacity: 0.7;
      }
    `}
`;

export default function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10) - 1];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image index={image.id} />
    </div>
  );
}
