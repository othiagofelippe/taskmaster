import React from 'react'

interface Task {
  id: number
  title: string
  category: string
  status: string
  completionDate: string
}

const taskList: Task[] = [
  {
    id: 1,
    title: 'Comprar mantimentos',
    category: 'Compras',
    status: 'Pendente',
    completionDate: '10/05/2023',
  },
  {
    id: 2,
    title: 'Pagar a conta de luz',
    category: 'Contas',
    status: 'Concluída',
    completionDate: '03/05/2023',
  },
  {
    id: 3,
    title: 'Fazer exercícios físicos',
    category: 'Saúde',
    status: 'Pendente',
    completionDate: '15/05/2023',
  },
  {
    id: 3,
    title: 'Fazer exercícios físicos',
    category: 'Saúde',
    status: 'Pendente',
    completionDate: '15/05/2023',
  },
  {
    id: 3,
    title: 'Fazer exercícios físicos',
    category: 'Saúde',
    status: 'Pendente',
    completionDate: '15/05/2023',
  },
  {
    id: 3,
    title: 'Fazer exercícios físicos',
    category: 'Saúde',
    status: 'Pendente',
    completionDate: '15/05/2023',
  },
  {
    id: 3,
    title: 'Fazer exercícios físicos',
    category: 'Saúde',
    status: 'Pendente',
    completionDate: '15/05/2023',
  },
  {
    id: 3,
    title: 'Fazer exercícios físicos',
    category: 'Saúde',
    status: 'Pendente',
    completionDate: '15/05/2023',
  },
]

export function Table() {
  return (
    <div className="overflow-y-auto min-w-[931px] h-[465px]">
      <table className="w-full border-collapse  ">
        <thead className="sticky top-0">
          <tr>
            <th className="bg-gray-600 p-4 rounded-tl-lg pl-6 text-left text-gray-200 text-sm leading-5">
              Tarefa
            </th>

            <th className="bg-gray-600 p-4 text-left text-gray-200 text-sm leading-5">
              Categoria
            </th>

            <th className="bg-gray-600 p-4 text-left text-gray-200 text-sm leading-5">
              Status
            </th>

            <th className="bg-gray-600 p-4 text-left text-gray-200 text-sm leading-5">
              Conclusão
            </th>

            <th className="bg-gray-600 p-4 rounded-tr-lg pr-6 text-left text-gray-200 text-sm leading-5">
              Ações
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}
