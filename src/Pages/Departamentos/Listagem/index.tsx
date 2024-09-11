import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Message } from 'primereact/message';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import listaDepartamentos from '../../../Services/Departamentos/listaDepartamentos';
import removeDepartamentos from '../../../Services/Departamentos/removeDepartamentos';


const Departamentos = () => {

  const [loadTable, setLoadTable] = useState(true);
  const [departamentos, setDepartamentos] = useState();
  const [loadDelete, setLoaDelete] = useState(false)
  const [erroDelete, seterroDelete] = useState('')
  //Alimenta o state Departamento com o axios quando ele ainda estiver vazio
  useEffect(() => {
    if(!departamentos)
    {
      listaDepartamentos({ setDepartamentos, setLoadTable });
    }
  }, [departamentos]);

  const navigate = useNavigate();
  const bodyAcao = (departamento : any) => {
    return(
      <>
        <Button icon="pi pi-pen-to-square" aria-label="Filter" className='mr-1' 
          onClick={() => {
            const { id_departamento } = departamento;
            navigate(`/departamentos/edit/${id_departamento}`);
          }}
        />
        <Button icon="pi pi-trash" loading={loadDelete} severity="danger" aria-label="Cancel"
         onClick={async () => {
          setLoaDelete(true)
          try
          {
            const { id_departamento } = departamento;
            await removeDepartamentos(id_departamento)
            navigate(0);
          }
          catch(e : any)
          {
            if(e.response?.data?.message)
            {
              const mensagem = `[${departamento.nome}] ${e.response?.data?.message}`
              seterroDelete(mensagem)
            }
            setLoaDelete(false)
          }
         }} />
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