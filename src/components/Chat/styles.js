import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 68px;
  border-bottom: 1px solid #fafafa;

  .img {
    margin-right: 20px;
  }

  p {
    color: gray;
  }

`;

export const Texts = styled.div`
  flex: 1;

  h2 {
    font-size: 20px;
  }

  p {
    color: gray;
  }
`;
