import { FormContainer, Input } from './styles';

function Form() {
  return (
    <FormContainer id="formulario">
      <Input placeholder="E-mail" type="email" required />
      <Input placeholder="password" type="password" required />
      <button type="submit">ENTRAR</button>
    </FormContainer>
  );
}

export default Form;
