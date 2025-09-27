import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;

  .upload-button {
    margin-bottom: 20px;
    background: #2ca6c9;
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
  }

  .no-data-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    font-size: 18px;
    text-align: center;
    gap: 20px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin: 0 32px;
  }

  .button-wrapper {
    display: flex;
    gap: 12px;
  }

  .logout {
    background: red;
    color: #fff;
    border: none;
    padding: 8px 20px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;
