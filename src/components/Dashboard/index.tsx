import { CardEmpreendimentos } from '../CardEmpreendimentos'
import { Container, Content } from './styles'

export function Dashboard() {
    return (
        <Container >
            <CardEmpreendimentos />
            <Content>
                <button>Carregar mais</button>
            </Content>
        </Container>
    )
}