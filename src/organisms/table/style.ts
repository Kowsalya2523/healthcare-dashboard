import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;

  .controls {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;

    input,
    select {
      padding: 6px 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }

    label {
      font-size: 14px;
      color: #333;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      border: 1px solid #eee;
      padding: 10px;
      text-align: left;
      font-size: 14px;
    }

    th {
      background: #f5f6fa;
      cursor: pointer;
    }

    tr:nth-child(even) {
      background: #fafafa;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 16px;

    button {
      padding: 6px 12px;
      border: none;
      border-radius: 6px;
      background: #2ca6c9;
      color: #fff;
      cursor: pointer;
      transition: 0.3s;

      &:disabled {
        background: #ccc;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        background: #2389a9;
      }
    }
  }
`;
