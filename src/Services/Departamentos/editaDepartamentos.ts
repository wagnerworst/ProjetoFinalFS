import api from "../api";

export const getDepartamento = async (id : any) => {
  const result = await api.get(`/departamentos/${id}`);
  return result;
}

export const putDepartamento = async (payload: any) => {
  const result = await api.get(`/departamentos/${payload.id}`, payload);
  return result;
}