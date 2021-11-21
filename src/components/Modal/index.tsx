import { useState } from "react"
import Divisor from "../Divisor"
import { Container, Content } from "./styles"

export default function Modal() {
    // const [values, setValues] = useState({
    //     name: '',
    // });

    // function onChange(ev) {
    //     setValues({
    //         ...values,
    //         [ev.target.name]: ev.target.value,
    //     })
    // }

    return (
        <Container>
            <Content>
                <header>
                    Informações
                </header>
                    <div className="modalEditar">                    
                    
                        <form className="formEdicao" method="post">

                            <select className="status" id="statusImovel" name="status" >
                                <option value="brevelancamento">Breve lançamento</option>
                                <option value="lancamento">Lançamento</option>
                                <option value="emobra">Em obras</option>
                                <option value="prontomorar">Pronto mara morar</option>
                            </select>
                            <Divisor />
                            <label>
                                <input type="text" className="nomeEmpreendimento" id="name" placeholder=" Nome do empreendimento" name="nomeEmpreendimento"  />
                            </label>

                            <Divisor />

                            <select className="tipoImovel" name="tipoImovel" >
                                <option value="residencial">Residencial</option>
                                <option value="empresarial">Empresarial</option>
                            </select>

                            <Divisor />

                            <label>
                                <input type="text" className="cep" name="cep" id="cep"  placeholder=" CEP" />
                            </label>
                            <label>
                                <input type="text" className="endereco" name="logradouro" id="numero" />
                            </label>
                            <label>
                                <input type="text" className="numero" name="numero" id="numero" />
                            </label>

                            <Divisor />

                            <a href="#">
                                <input type="submit" value="Cadastrar" className="cadastar"/>
                            </a>

                        </form>
                    </div>
            </Content>
        </Container>
    )
}