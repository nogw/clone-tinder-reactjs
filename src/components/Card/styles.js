import styled from 'styled-components';

export const Container = styled.div`
  width: 272px;
  height: 100%;
  background-color: #ebecf0;
  border-radius: 4px;
  margin: 4px;
`;

export const Header = styled.div`
  padding: 6px 6px;
  display: flex;
  align-items: center;

  h1 {
    color: #172b4d;
    font-size: 16px;
    padding-left: 6px;
    line-height: 20px;
    border-radius: 4px;
    height: 28px;
    width: 100%;
    font-weight: 600;
    display: flex;
    align-items: center;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    min-height: 34px;
    min-width: 34px;

    &:hover {
      background-color: #dbdce0;
    }

    .MuiSvgIcon-root {
      color: #5e6c84;
      font-size: 20px;
    }
  }
`;

export const Add = styled.div`
  cursor: pointer;
  padding: 6px 6px;
  display: flex;
  align-items: center;

  h1 {
    color: #5e6c84;
    font-size: 16px;
    padding: 4px;
    line-height: 20px;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #dbdce0;
    }
  }
`;

export const Content = styled.div`
  padding: 10px;
  margin: 4px 10px;
  border-radius: 4px;
  border-bottom: 1px solid #b2b8c4;
  background-color: #fff;
`;