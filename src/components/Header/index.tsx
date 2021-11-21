import { Container, Content } from "./styles";
import adicionar from '../../../public/adicionar.svg'
import React from "react";
import Link from "next/link";

export function Header() {

    return (
        <Container>
            <Content>
                <span>Empreendimentos</span>
                <Link href="/cadastrar" passHref>
                    <button>
                        Adicionar
                        <img src={adicionar} alt="adicionar" 
                            width={12}
                            height={12}
                        />
                    </button>
                </Link>
            </Content>
        </Container>
    )
}