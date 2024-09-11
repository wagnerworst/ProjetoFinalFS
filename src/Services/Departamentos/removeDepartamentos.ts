import api from "../api";

const removeDepartamentos = async (idDepartamento : number) => {
  const result = await api.delete(
    `departamentos?id=${idDepartamento}`
  )
  return result
}

export default removeDepartamentos