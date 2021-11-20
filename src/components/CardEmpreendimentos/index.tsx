import React from 'react';
import { Container, Content } from './styles';
import deletar from '../../../public/deletar.svg'
import editar from '../../../public/editar.svg'

export function CardEmpreendimentos() {
    return (
        <Container>
            <Content>
                <section className="esquerda">
                    <div className="nomeEmpreendimento">
                        <strong>
                            Villega Vila Velha
                        </strong>

                        <div className="icones">
                            
                            <input type="image"
                                src={editar} 
                                width={12.68}
                                height={12.68}
                            />
                            <input type="image" 
                                src={deletar} 
                                width={12.68}
                                height={12.68}
                            />
                        </div>
                    </div>

                    <div className="enderecoEmpreendimento">
                        <p>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</p>
                    </div>
                </section>

                <section className="direita">
                <div className="tagLancamento">
                    Lançamento
                </div>
                <div className="tagTipoLancamento">
                    Empresarial
                </div>
                </section>
            </Content>

        </Container>
    )
}