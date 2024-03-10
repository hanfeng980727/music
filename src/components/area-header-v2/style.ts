import styled from 'styled-components'

export const HeaderV2Wrapper = styled.div`
  /* .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    span {
      font-weight: 700;
    }

    a {
      font-weight: 500;
    }
  } */

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;

  h3 {
    font-size: 12px;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  a {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
