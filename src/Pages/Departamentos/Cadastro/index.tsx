import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const FormDepartamentos = () => {
  const [valueNome, setValueNome] = useState("");
  const [valueSigla, setValueSigla] = useState("");

  return (
    <>
      <h1 className='col-span-12 text-2xl mb-5'>
        Cadastrar novo departamento
      </h1>
      <form action="POST" className='col-span-12 flex flex-col gap-1'>
        <div className='flex w-full gap-1'>
          <div className='w-2/3'>
            <FloatLabel>
              <InputText className='w-full' id="nomeDepartamento" value={valueNome} onChange={(e) => setValueNome(e.target.value)} required/>
              <label htmlFor="nomeDepartamento">Nome</label>
            </FloatLabel>
          </div>
          <div className='w-1/3'>
            <FloatLabel>
              <InputText className='w-full' id="nomeDepartamento" value={valueSigla} onChange={(e) => setValueSigla(e.target.value)} required/>
              <label htmlFor="nomeDepartamento">Sigla</label>
            </FloatLabel>
          </div>
        </div>

        <div className='w-full flex justify-end'>
          <div className='flex gap-1'>
            <Link to={"/Departamentos"}>
              <Button icon="pi pi-save" aria-label="Filter" label="Salvar"/>
            </Link>
            <Link to={"/Departamentos"}>
              <Button icon="pi pi-times" aria-label="Filter" label="Cancelar" severity='danger'/>
            </Link>
          </div>
        </div>

      </form>
    </>
  )
}

export default FormDepartamentos;