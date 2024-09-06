import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import listaDepartamentos from '../../../Services/Departamentos/listaDepartamentos';
import { useState, useEffect } from 'react';


const Departamentos = () => {

  const [loadTable, setLoadTable] = useState(true);
  const [departamentos, setDepartamentos] = useState();
  useEffect(() => {
    if(!departamentos)
    {
      listaDepartamentos({ setDepartamentos, setLoadTable });
    }
  }, [departamentos]);
  const navigate = useNavigate();
  const bodyAcao = () => {
    return(
      <>
        <Button icon="pi pi-pen-to-square" aria-label="Filter" className='mr-1' />
        <Button icon="pi pi-trash" severity="danger" aria-label="Cancel" />
      </>
    )
  };
 

  return(
    <>
      <div className="col-span-11 text-2xl flex items-center">
        <h1>Listagem de Departamentos</h1>
      </div>
      <Button className='col-span-1 float-end' label="Novo" icon="pi pi-plus" size="small" 
      onClick={() => {navigate("/departamentos/new")}}
      />
      <br />

      <div className='col-span-12'>
        <DataTable value={departamentos} stripedRows loading={loadTable}>
          <Column field="nome" header="Departamento" sortable style={{ width: '80%' }}></Column>
          <Column field="sigla" header="Sigla" sortable></Column>
          <Column header="Ação" body={bodyAcao}></Column>
        </DataTable>
      </div>
    </> 
  )
}

export default Departamentos;