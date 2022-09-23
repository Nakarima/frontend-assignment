import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    margin-right: 0.5rem;
  }
`;

const StyledSelect = styled.select`
  border: 0.0625rem solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

interface IProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  title: string;
}

export const SelectInput = ({ value, onChange, options, title }: IProps) => {
  return (
    <Container>
      <p>{title}:</p>
      <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};
