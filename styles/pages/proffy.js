import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  align-items: center;
  background: #6842C2;

  header {
    padding: 5rem 20rem;
    flex: 1;
    display: flex;
    align-items: center;
    height: 100vh;

    h1 {
      line-height: 1.15;
      font-size: 10rem;
      text-align: left;
      color: #fff;

      img {
        padding: 2rem;
      }
    }

    p {
      font-size: 18px;
      color: #fff;
      max-width: 450px;
    }

    img {
      width: 720px;
      height: 410px;
    }
  }
`;