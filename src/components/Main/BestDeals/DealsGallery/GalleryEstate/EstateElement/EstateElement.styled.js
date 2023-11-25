import styled from "styled-components";

export const Estate = styled.div`
  position: relative;
`;
export const EstateOptions = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;

  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: #fff;
`;
export const EstateOption = styled.a`
  padding: 6px 12px;

  border-radius: 5px;
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 12px;

  transition: background-color 0.3s ease 0s;

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const EstateImage = styled.a`
  position: relative;
  display: block;
  border-radius: 5px;
  padding-bottom: 81%;
  overflow: hidden;
`;
export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;

  transition: transform 0.3s ease 0s;

  :hover {
    transform: scale(1.1);
  }
`;
