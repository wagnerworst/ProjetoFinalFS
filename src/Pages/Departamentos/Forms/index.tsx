import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const FormDepartamentos = () => {
  const navigate = useNavigate();
  const [valueNome, setValueNome] = useState("");
  const [valueSigla, setValueSigla] = useState("");
  const [erroValueNome, setErroValueNome] = useState(false);
  const [erroValueSigla, setErroValueSigla] = useState(false);

  const validaFormulario = () => {
    setErroValueNome(false);
    setErroValueSigla(false);
    if (valueNome === '')
    {
      setErroValueNome(true);
      return false;
    }
    if (valueSigla === '')
    {
      setErroValueSigla(true);
      return false;
    }

    return true
  }

  return (
    <>
      <h1 className='col-span-12 text-2xl mb-5'>
        Cadastrar novo departamento
      </h1>
      <form action="POST" className='col-span-12 flex flex-col gap-1'>
        <div className='flex w-full gap-1'>
          <div className='w-2/3'>
            <FloatLabel>
              <InputText className='w-full' id="nomeDepartamento" value={valueNome} 
              onChange={(e) => setValueNome(e.target.value)}/>
                <label htmlFor="nomeDepartamento">Nome</label>
            </FloatLabel>
            <small className='text-red-400'hidden={!erroValueNome}>
              Nome Inválido
            </small>
          </div>
          <div className='w-1/3'>
            <FloatLabel>
              <InputText className='w-full' id="nomeDepartamento" value={valueSigla} 
              onChange={(e) => setValueSigla(e.target.value)}/>
                <label htmlFor="nomeDepartamento">Sigla</label>
            </FloatLabel>
            <small className='text-red-400' hidden={!erroValueSigla}>
              Sigla Inválida
            </small>
          </div>
        </div>

        <div className='w-full flex justify-end'>
          <div className='flex gap-1'>
            <Button icon="pi pi-save" aria-label="Filter" label="Salvar"
            onClick={() =>{
              if(validaFormulario()){
                
                navigate("/Departamentos")
              }
            }}
            />
            <Button 
            icon="pi pi-times" aria-label="Filter" label="Cancelar" severity='danger'
            onClick={() => {navigate("/Departamentos")}}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default FormDepartamentos;