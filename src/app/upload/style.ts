import styled from "styled-components";

export const Container = styled.div`
  .file-section {
    display: flex;
    gap: 40px;
    padding: 40px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    max-width: 70%;
    margin: 40px auto;
  }

  .drop-zone {
    flex: 1;
    border: 2px dashed #2ca6c9;
    border-radius: 8px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #777;
    font-size: 14px;

    .browse-btn {
      background: #2ca6c9;
      color: #fff;
      border: none;
      padding: 8px 20px;
      border-radius: 6px;
      font-size: 14px;
      cursor: pointer;
      margin-bottom: 10px;
      transition: 0.3s;
    }

    .browse-btn:hover {
      background: #2389a9;
    }
  }

  .file-list {
    flex: 1;

    h4 {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: 600;
    }

    .file-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      font-size: 14px;
    }

    .file-info {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .file-name {
      color: #333;
    }

    .file-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .delete-btn {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .footer-section {
    display: flex;
    margin: 32px 15%;
    justify-content: space-between;

    button {
      padding: 10px 20px;
      border-radius: 6px;
      border: none;
      background: #2ca6c9;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #2389a9;
      }
    }
  }
`;
