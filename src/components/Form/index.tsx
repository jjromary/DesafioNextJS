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
    district: String,
    city: String,
    street: String,
    state: String,
    number: Number,
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
		district: "",
		city: "",
		street: "",
		state: "",
		number: 0,
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
				setFieldValue('street', data.logradouro);
				setFieldValue('district', data.bairro);
				setFieldValue('city', data.localidade);
				setFieldValue('state', data.uf);
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
								<div className="formEdicao">
                <div>
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
                </div>
                <Divisor />

                <div>
                  <label htmlFor="name" />
                  <Field
                    type="text"
                    className="nomeEmpreendimento"
                    name="name"
                    placeholder=" Nome do empreendimento"
                  />
                </div>
                <Divisor />

                <div>
                  <label htmlFor="purpose"></label>
                  <Field as="select"
                    className="tipoImovel"
                    name="purpose"
                  >
                    <option value="residencial">Residencial</option>
                    <option value="empresarial">Empresarial</option>
                  </Field>
                </div>
                <Divisor />

                <div>
                  <label htmlFor="cep">
                    <Field
                      type="text"
                      className="cepEmpreendimento"
                      name="cep"
                      placeholder=" CEP"
                      onBlur={(e) => onBlurCep(e, setFieldValue)}
                    />
                  </label>
                </div>

                <div className="address">
                  <div>
                    <label htmlFor="street">
                      <Field
                        className="endereco"
												type="text"
                        name="street"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="district">
                      <Field
                        className="endereco"
												type="text"
                        name="district"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="city">
                      <Field
                        className="endereco"
												type="text"
                        name="city"
                      />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="state">
                      <Field
                        className="endereco"
												type="text"
                        name="state"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="number">
                    <Field
                      type="text"
                      className="numero"
                      name="number"
                    />
                  </label>
                </div>
                <Divisor />

                <div>
                  <button type="submit" className="cadastar">
                    Cadastrar
                  </button>
                </div>
								</div>
              </Form>
            )}
          />
        </div>
      </Content>
    </Container>
  );
}
