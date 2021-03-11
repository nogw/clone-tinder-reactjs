import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  bottom: 8vh;
  width: 100%;

  .MuiIconButton-root {
    background-color: #fff;
    box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.1);
  }

  .close {
    padding: 0.8rem;
    color: #ff6c5a;
  }


  .favorite {
    padding: 1.2rem;
    color: #fe2a7b;
  }

  .Message {
    padding: 0.8rem;
    color: #ff6c5a;
  }
`;
