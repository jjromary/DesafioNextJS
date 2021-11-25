import React, { ReactNode, useState } from "react";
import axios from "axios";
import Divisor from "../Divisor";
import { Container, Content } from "./styles";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from "formik";

interface MyFormValues {
	id: String,
  name: String,
  status: String,
  purpose: String,
  ri_number: String,
  address: {
    street: String,
    number: String,
    district: String,
    city: String,
    state: String,
    cep: String,
	}
}

const initialValue : MyFormValues = {
	id: "",
	name: "",
	status: "",
	purpose: "",
	ri_number: "",
	address: {
		street: "",
		number: "",
		district: "",
		city: "",
		state: "",
		cep: "",
	},
};

export default function Formulario() {
  const [values, setValues] = useState(initialValue);
  // const history = useHistory();

  function onSubmit(values, actions) {
    axios.post("http://localhost:3001/enterprises", values);
    // .then((response) => {
    // history.push('/');
    //   });
  }

  // Função para execucar chamada a API ViaCEP fazendo validação de dados
  function onBlurCep(e, setFieldValue) {
    const { value } = e.target;
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.lenght == !8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
				setFieldValue('address.street', data.logradouro);
				setFieldValue('address.district', data.bairro);
				setFieldValue('address.city', data.localidade);
				setFieldValue('address.state', data.uf);
				setFieldValue('address.cep', data.cep);
      });
  }

  return (
    <Container>
      <Content>
        <header>Informações</header>
        <div className="modalEditar">
          <Formik
					onSubmit={onSubmit}
					initialValues={initialValue}
            render={({ values, handleSubmit, setFieldValue }) => (
							<Form>
                <div className="containerStatus">
                  <label htmlFor="status" />
                  <Field as="Select" 
                    className="status"
                    name="status"
                  >
                    <option value="breveLancamento">Breve lançamento</option>
                    <option value="lancamento">Lançamento</option>
                    <option value="emObra">Em obras</option>
                    <option value="prontoMorar">Pronto mara morar</option>
                  </Field>
                <Divisor />
                </div>

                <div className="containerNomeEmpreenddimento">
                  <label htmlFor="name" />
                  <Field
                    type="text"
                    className="nomeEmpreendimento"
                    name="name"
                    placeholder=" Nome do empreendimento"
                  />
                <Divisor />
                </div>

                <div className="containerTipoImovel">
                  <label htmlFor="purpose"></label>
                  <Field as="select"
                    className="tipoImovel"
                    name="purpose"
                  >
                    <option value="residencial">Residencial</option>
                    <option value="empresarial">Empresarial</option>
                  </Field>
                <Divisor />
                </div>

                <div className="containerCep">
                  <label htmlFor="address.cep">
                    <Field
                      type="text"
                      className="cepEmpreendimento"
                      name="address.cep"
                      placeholder=" CEP"
                      onBlur={(e) => onBlurCep(e, setFieldValue)}
                    />
                  </label>
                  <Divisor />
                </div>

                <div className="containerAddress">
                  <div>
                    <label htmlFor="address.street">
                      <Field
                        className="endereco"
												type="text"
                        name="address.street"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="address.district">
                      <Field
                        className="endereco"
												type="text"
                        name="address.district"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="address.city">
                      <Field
                        className="endereco"
												type="text"
                        name="address.city"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="address.state">
                      <Field
                        className="endereco"
												type="text"
                        name="address.state"
                      />
                    </label>
                  </div>
                </div>

                <div className="containerNumero">
                  <label htmlFor="address.number">
                    <Field
                      type="text"
                      className="numero"
                      name="address.number"
                    />
                  </label>
                <Divisor />
                </div>

                <div>
                  <button type="submit" className="cadastar">
                    Cadastrar
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </Content>
    </Container>
  );
}
