import { useRouter } from 'next/router'
import Formulario from '../../components/Form'


export default function Post<Variavel> () {
  const router = useRouter()
  const { id } = router.query

  return(
    <Formulario id={id}/>
    
    ) 
}
