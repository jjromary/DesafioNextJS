import { Container, Content } from "./styles";
import adicionar from '../../../public/adicionar.svg'

export function Header() {
    return (
        <Container>
            <Content>
                <span>Empreendimentos</span>
                <button>
                    Adicionar
                    <img src={adicionar} />
                </button>
            </Content>
        </Container>
    )
}