import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 0.25rem;
  align-items: flex-end;
`;

export const TitleInfo = styled.div`
  font-size: ${({ theme }) => theme.font.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
`;
export const TextInfo = styled.div`
  font-size: ${({ theme }) => theme.font.large};
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
  margin-left: 0.25rem;
`;