import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.verdeClaro};

  margin-top: 5rem;
  width: 442px;
  height: 550px;
  border-radius: 10px;

  .logo {
    display: flex;
    justify-content: center;
    img {
      border: none;
    }
  }
`;
export const FormContainer = styled.form`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: ${({ theme }) => theme.colors.verdeClaro};
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.verdeEscuro};
    transition: 0.5s;
    width: 301px;
    height: 78px;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.amarelo};
    }
  }
  @media (max-width: 700px) {
    margin-top: 2rem !important;
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    margin-top: 2rem !important;
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 295px;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 1.7rem 1.5rem;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: #fff;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.verdeEscuro};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
