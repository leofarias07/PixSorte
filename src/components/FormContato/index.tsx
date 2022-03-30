import Form from './Form';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

function FormContato() {
  return (
    <Container>
      <main className="container">
        <div className="logo">
          <img src={Logo} />
        </div>

        <Form />
      </main>
    </Container>
  );
}

export default FormContato;
