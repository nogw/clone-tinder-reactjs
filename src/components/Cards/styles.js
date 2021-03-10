import styled from 'styled-components';

export const Container = styled.div`
  .cardItem {
    position: absolute;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

export const Card = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 600px;
  box-shadow: 0px 10px 25px -5px rgba(0,0,0,0.15);
  padding: 20px;
  max-width: 80vw;
  height: 50vh;
  border-radius: 20px;

  h3 {
    position: absolute;
    bottom: 15px;
    font-size: 24px;
    color: #fff;
  }
`;
