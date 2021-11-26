import React from "react";
import { useParams } from "react-router-dom";

const Editar = () => {
    const {id} = useParams();

    return(
        <div>
            id do empreendimento
            { <div> id: {id} </div>}
        </div>
    );
}

export default Editar