import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f9f9f9;

  .MuiSvgIcon-root {
    margin: 20px;
  }

  img {
    object-fit: contain;
    width: 90px;
    height: 32px;
    transition: transform 300ms ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.3) rotate(-30deg);
    };
  }
`;
