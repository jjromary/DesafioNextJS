import { useRouter } from 'next/router'
import Formulario from '../../components/Form'


export default function Post<Variavel> () {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  return(
    <Formulario id={id}/>
    
    ) 
}
