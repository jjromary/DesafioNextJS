import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import deletar from '../../../public/deletar.svg'
import editar from '../../../public/editar.svg'
import api from '../../services/api';

export function CardEmpreendimentos() {
    const [empreendimentos, setEmpreendimentos] = useState([]);

    useEffect(() => {
        api.get('enterprises')
            .then(response => setEmpreendimentos(response.data))
    }, []);

    return (
            <>
        <Container>
            {empreendimentos.map((empreendimento, index) => (
                    <div key={index} className="card">
                            <section  className="esquerda">
                                <div className="nomeEmpreendimento">
                                    <strong>
                                        {empreendimento.name}
                                    </strong>

                                    <div className="icones">
                                        <a>
                                            <input type="image"
                                                src={editar}
                                                width={12.68}
                                                height={12.68}
                                            />
                                        </a>
                                        <input type="image"
                                            src={deletar}
                                            width={12.68}
                                            height={12.68} />
                                    </div>
                                </div>

                                <div className="enderecoEmpreendimento">
                                    <p>{empreendimento.address.street},&nbsp;</p>
                                    <p>{empreendimento.address.number} &nbsp;-&nbsp; </p>
                                    <p> {empreendimento.address.district},&nbsp;</p>
                                    <p>{empreendimento.address.city}</p>
                                </div>
                            </section><section className="direita">
                                <div className="tagLancamento">
                                    {empreendimento.status}
                                </div>
                                <div className="tagTipoLancamento">
                                    {empreendimento.purpose}
                                </div>
                            </section>
                    </div>
            ))}
        </Container>
            </>
    )
}