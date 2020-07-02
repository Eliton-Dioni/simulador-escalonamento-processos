import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  background:${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Text = styled.text`
  font: 400 18px Roboto, sans-serif;
`