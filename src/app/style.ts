import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f6fa;

  .card {
    display: flex;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 800px;
    max-width: 95%;
  }

  .left {
    flex: 1;
    background: #3b2d9e;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    text-align: center;
  }

  .img-hospital {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .desc {
    margin-top: 20px;
    max-width: 300px;
  }

  .right {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    margin-bottom: 24px;
    text-align: center;
  }

  .input {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
  }

  .btn {
    width: 100%;
    padding: 12px;
    background: #2ca6c9;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    margin-bottom: 12px;
    transition: 0.3s;
  }

  .btn:hover {
    background: #2389a9;
  }

  .error {
    color: red;
    margin-top: 10px;
  }
`;
