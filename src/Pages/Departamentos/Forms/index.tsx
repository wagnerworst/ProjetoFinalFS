import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { FloatLabel } from 'primereact/floatlabel';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import insereDepartamentos from '../../../Services/Departamentos/insereDepartamentos';

const FormDepartamentos = () => {
  const navigate = useNavigate();
  const [valueNome, setValueNome] = useState("");
  const [valueSigla, setValueSigla] = useState("");
  const [erroValueNome, setErroValueNome] = useState(false);
  const [erroValueSigla, setErroValueSigla] = useState(false);
  const [erroAPI, setErroAPI] = useState('')

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
      <div className='col-span-12 flex flex-col gap-1'>
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
            onClick={async () =>{
              if(validaFormulario()){
                try
                {
                  await insereDepartamentos(
                    {
                      "nome": valueNome,
                      "sigla": valueSigla
                    }
                  )
                  navigate("/departamentos")
                }
                catch(e : any)
                {
                  if(e.response?.data?.message){
                    setErroAPI(e.response.data.message)
                  }
                }
              }
            }}
            />
            <Button 
            icon="pi pi-times" aria-label="Filter" label="Cancelar" severity='danger'
            onClick={() => {navigate("/Departamentos")}}
            />
          </div>
        </div>
      </div>
      <div className='col-span-12' hidden={erroAPI === ''}>
        <Message text={erroAPI} className='w-full' severity='error' />
      </div>
    </>
  )
}

export default FormDepartamentos;