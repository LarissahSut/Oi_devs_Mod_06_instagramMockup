import styled from 'styled-components';

export const Wrapper = styled.article`
  max-width: 975px;
  padding: 30px 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Item = styled.div`
  width: 293px;
  height: 293px;
  margin-bottom: 28px;
  cursor: pointer;
  img {
    width: 100%;
    height: 293px;
    object-fit: cover;
  }
`;
