import { Container, Content } from "./styles";
import adicionar from "../../../public/adicionar.svg";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <Container>
      <Content>
        <span>Empreendimentos</span>
        
        <Link href="/cadastrar" passHref>
          <button>
            Adicionar
            <a>
              <Image src={adicionar} alt="adicionar" width={12} height={12} />
            </a>
          </button>
        </Link>
      </Content>
    </Container>
  );
}
