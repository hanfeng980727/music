import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 126px;
  background-position: 0 0;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 22px;
    width: 205px;
    margin: 0 auto;
    padding-top: 16px;
  }

  a {
    margin-top: 10px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;

    &:hover {
      background-position: -110px -195px;
    }
  }
`
