import styled from 'styled-components';

export const ContainerSelected = styled.div`
  .container-close {
    border-radius: 25px;
    transition: 0.4s;
  }
  .container {
    background-color: #fff;
    padding: 8px 20px;
    color: black;
    cursor: pointer;
    width: 170px;
  }
  .container-open {
    border-radius: 25px 25px 0 0;
    animation: slideBar 0.1s;
    cursor: pointer;
  }

  .container:hover {
    background: #c2c2c2;
    cursor: pointer;
  }
  .description {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 25px;
    height: 25px;
    margin-right: 8px;
  }
  .options {
    border-radius: 0 0 25px 25px;
    transform: scale(0);
    background: #fff;
    position: absolute;
    padding: 8px 20px;
    color: black;
    transition: transform ease 0.1s;
    width: 170px;
    box-shadow: var(--box-shadow);
  }
  .option span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4px 0;
  }
  .option:hover {
    background: #e9e9e9;
    cursor: pointer;
  }
  .open {
    display: block;
    transform: scale(1);
    transform-origin: top;
    transition: height ease 0.2s;
    transition: transform ease 0.1s;
  }
`;
