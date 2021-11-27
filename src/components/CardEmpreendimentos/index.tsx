import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import deletar from "../../../public/deletar.svg";
import editar from "../../../public/editar.svg";
import api from "../../services/api";
import Link from "next/link";
import Image from "next/image";
import next from "next";

export function CardEmpreendimentos() {
  const [empreendimentos, setEmpreendimentos] = useState([]);

  useEffect(() => {
    api
      .get("enterprises")
      .then((response) => setEmpreendimentos(response.data));
  }, []);

  return (
    <>
      <Container>
        {empreendimentos.map((empreendimento, index) => (
          <div key={index} className="card">
            <section className="esquerda">
              <div className="nomeEmpreendimento">
                <strong>{empreendimento.name}</strong>

                <div className="iconeEditar">
                  <Link href={`/editar/${empreendimento.id}`}>
                    <a>
                      <Image src={editar} width={12} height={12} alt="editar" />
                    </a>
                  </Link>
                </div>
                <div className="iconeDeletar">
                  <Link href={`/delete/${empreendimento.id}`}>
                    <a>
                      <Image
                        src={deletar}
                        width={12}
                        height={12}
                        alt="deletar"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="enderecoEmpreendimento">
                <p>{empreendimento.address.street},&nbsp;</p>
                <p>{empreendimento.address.number} &nbsp;-&nbsp; </p>
                <p> {empreendimento.address.district},&nbsp;</p>
                <p>{empreendimento.address.city}</p>
              </div>
            </section>
            <section className="direita">
              <div className="tagLancamento">{empreendimento.status}</div>
              <div className="tagTipoLancamento">{empreendimento.purpose}</div>
            </section>
          </div>
        ))}
      </Container>
    </>
  );
}
