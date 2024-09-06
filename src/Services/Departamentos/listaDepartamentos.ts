import api from "../api";

const listaDepartamentos = async( {setDepartamentos, setLoadTable}: any ) => {
  const result = await api.get("/Departamentos");
  setDepartamentos(result.data);
  setLoadTable(false);
}

export default listaDepartamentos;