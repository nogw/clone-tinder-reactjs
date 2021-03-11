import styled from 'styled-components';

export const Container = styled.div`
  .title {
    text-align: center;
    color: gray;
    padding: 20px;
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  padding: 18px;

  p {
    margin-left: 10px;
    background-color: lightgray;
    padding: 10px;
    border-radius: 20px;
  }

  .myMessage {
    margin-left: auto;
    color: #fff;
    background-color: #ff695b;
  }
`;

export const InputMessage = styled.div`
  display: flex;
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid lightgray;

  form {
    display: flex;
    width: 100%;
    
    input {
      flex: 1;
      padding: 10px;
      border: none;
    }

    button {
      border: none;
      margin-right: 16px;
      background-color: #fff;
      font-weight: bolder;
      color: #ff695b;
    }
  }

`;