
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const Departamentos = () => {

  const departamentos = [
    {
      id_departamento: 1,
      nome: 'Recursos Humanos',
      sigla: 'RH'
    },
    {
      id_departamento: 2,
      nome: 'Tecnologia da Informação',
      sigla: 'TI'
    }
  ]

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
      <div className="col-span-12">
            <h1>Listagem de Departamentos</h1>
      </div>

      <div className='col-span-12'>
        <DataTable value={departamentos} stripedRows>
          <Column field="nome" header="Departamento" sortable style={{ width: '80%' }}></Column>
          <Column field="sigla" header="Sigla" sortable></Column>
          <Column header="Ação" body={bodyAcao}></Column>

        </DataTable>
      </div>
    </> 
  )
}

export default Departamentos;