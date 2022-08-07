import styled, { css } from 'styled-components';

type MenuHeaderProps = {
  open?: boolean;
  selected?: boolean;
};

export const ContainerSelected = styled.div`
  svg {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
`;

export const CurrentOption = styled.button<MenuHeaderProps>`
  all: unset;
  background-color: #fff;
  padding: 8px 10px;
  border-radius: 25px;
  color: black;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 170px;

  ${({ open }) =>
    open &&
    css`
      border-radius: 25px 25px 0 0;
    `}
`;

export const OptionMenu = styled.button<MenuHeaderProps>`
  all: unset;
  width: 100%;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  padding: 4px 0 4px 4px;

  &:hover {
    background: #eaecf0;
    cursor: pointer;
  }
`;

export const WrapperOptions = styled.div<MenuHeaderProps>`
  border-radius: 0 0 25px 25px;
  transform: scale(0);
  background: #fff;
  position: absolute;
  padding: 8px 10px;
  color: black;
  transition: transform ease 0.1s;
  width: 190px;
  box-shadow: var(--box-shadow);
  ${({ open }) =>
    open
      ? css`
          display: block;
          transform: scale(1);
          transform-origin: top;
          transition: height ease 0.2s;
          transition: transform ease 0.1s;
        `
      : css``}
`;
