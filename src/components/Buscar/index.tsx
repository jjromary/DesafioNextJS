import { Container} from "./styles"
import Image from 'next/image'
import Divisor from "../Divisor"


export function Buscar() {
    return (
        <Container>
           
                <div className="buscarEmpreendimento">
                    <Image src="/../public/buscar.svg"
                        alt="buscar"
                        width={12.67}
                        height={12.67}
                    />
                    <input type="text"
                        placeholder="Buscar"
                    />
                </div>

                <Divisor/>
            
        </Container>
    )
}