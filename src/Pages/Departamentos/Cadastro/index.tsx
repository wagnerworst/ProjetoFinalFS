import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

const FormDepartamentos = () => {
  const [valueNome, setValueNome] = useState("");
  const [valueSigla, setValueSigla] = useState("");

  return (
    <>
      <Card title="Novo Departamento" className='col-span-12 flex items-center justify-center flex-col gap-2'>
        <form action="POST" className='flex flex-col gap-2'>
          <FloatLabel>
            <InputText id="nomeDepartamento" value={valueNome} onChange={(e) => setValueNome(e.target.value)} required/>
            <label htmlFor="nomeDepartamento">Nome</label>
          </FloatLabel>
          <FloatLabel>
            <InputText id="nomeDepartamento" value={valueSigla} onChange={(e) => setValueSigla(e.target.value)} required/>
            <label htmlFor="nomeDepartamento">Sigla</label>
          </FloatLabel>
          <Button icon="pi pi-save" aria-label="Filter" label="Salvar"/>
          <Link to={"/Departamentos"}>
            <Button className='w-full' icon="pi pi-times" aria-label="Filter" label="Cancelar" severity='danger'/>
          </Link>
        </form>
      </Card>
    </>
  )
}

export default FormDepartamentos;