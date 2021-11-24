import React, { useState } from "react"
import axios from 'axios'
import Divisor from "../Divisor"
import { Container, Content } from "./styles";
import { useHistory } from "react-router-dom"

const initialValue = {
    id:'',
    name: '',
    status: '',
    purpose: '',
    cep: 0,
    number: 0
}

export default function Form() {
    const[values, setValues] = useState(initialValue);
    const history = useHistory();

    function onChange(e) {
        const {name, value} = e.target;
        
            setValues({...values, [name]: value});
    }

    function onSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:3001/enterprises', values)
        // .then((response) => {
        // history.push('/');
    //   });
    }
    
    return (
        <Container>
            <Content>
                <header>
                    Informações
                </header>
                <div className="modalEditar">
                    <form className="formEdicao" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="status" />
                            <select className="status" id="status" name="status" onChange={onChange} >
                                <option value="brevelancamento">Breve lançamento</option>
                                <option value="lancamento">Lançamento</option>
                                <option value="emobra">Em obras</option>
                                <option value="prontomorar">Pronto mara morar</option>
                            </select>
                        </div>
                        <Divisor />

                        <div>
                            <label htmlFor="name" />
                            <input type="text"
                                className="nomeEmpreendimento"
                                name="name"
                                id="name"
                                placeholder=" Nome do empreendimento" 
                                onChange={onChange}/>
                        </div>
                        <Divisor />

                        <div>
                            <label htmlFor="purpose"></label>
                            <select className="tipoImovel" id="purpose" name="purpose" onChange={onChange}>
                                <option value="residencial">Residencial</option>
                                <option value="empresarial">Empresarial</option>
                            </select>
                        </div>
                        <Divisor />

                        <div>
                            <label htmlFor="cep">
                                <input type="number"
                                    className="cepEmpreendimento"
                                    name="cep"
                                    id="cep"
                                    placeholder=" CEP"
                                    onChange={onChange}
                                />
                            </label>
                        </div>

                        {/* <div className="address">
                            <label htmlFor="address">
                                <input type="text" className="endereco" name="address" id="address" onChange={onChange} />
                            </label>
                        </div> */}

                        <div>
                            <label htmlFor="number">
                                <input
                                    type="text"
                                    className="numero"
                                    name="number"
                                    id="number"
                                    onChange={onChange}
                                />
                            </label>
                        </div>
                        <Divisor />

                        <div>
                            <button type="submit" className="cadastar">Cadastrar</button>
                        </div>

                    </form>
                </div>
            </Content>
        </Container>
    )
}