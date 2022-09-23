import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

const StyledImg = styled.img`
  width: 16rem;
  height: 9rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  object-fit: cover;
  flex: 0 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Heading = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
`;

const Date = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const Description = styled.p`
  margin: 0;
  max-width: 100%;
  max-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface IProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

export const Card = ({ title, description, image, date }: IProps) => {
  return (
    <Container>
      <StyledImg src={image || 'https://via.placeholder.com/150'} alt={title} />
      <TextContainer>
        <HeadingContainer>
          <Heading>{title}</Heading>
          <Date>{date}</Date>
        </HeadingContainer>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
};
