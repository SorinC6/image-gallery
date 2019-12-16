import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { IMAGES } from "../../imageData";
import { Image } from "../Gallery/ImageView";
import styled, { createGlobalStyle } from "styled-components";
import { PostGrid, InfoGrid } from "./PostGrid";
import { ProfileImage } from "../Profile/ProfileImg";

const OverflowHidden = createGlobalStyle`
  body{
    overflow:hidden;
  }
`;

const ModalStyled = styled.div`
  position: absolute;
  background: #fff;
  top: ${({ top }) => top}px;
  left: 25%;
  right: 20%;
  padding: 15;
  border: 2px solid #444;
  width: 600px;
`;

const UserDetail = styled.div`
  display: grid;
  justify-content: left;
  grid-template-columns: auto auto;
  gap: 10px;
`;
export default function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10) - 1];

  if (!image) return null;

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: "5000px",
        background: "rgba(0, 0, 0, 0.8)"
      }}
    >
      <ModalStyled top={window.scrollY + window.innerHeight / 2 - 250}>
        <OverflowHidden />
        <PostGrid>
          <Image inModal index={image.id} />
          <InfoGrid>
            <UserDetail>
              <ProfileImage mini />
              <h2>Image Gallery</h2>
            </UserDetail>
            <div>
              <h2>{image.title}</h2>
              <div>Comments</div>
            </div>
            <div>306 likes</div>
          </InfoGrid>
        </PostGrid>
      </ModalStyled>
    </div>
  );
}
