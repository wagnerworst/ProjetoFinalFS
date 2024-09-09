import api from "../api"

const insereDepartamentos = async(payload : any) =>{
  const result = await api.post(
    "/departamentos",
    payload
  )
  return result;
}

export default insereDepartamentos