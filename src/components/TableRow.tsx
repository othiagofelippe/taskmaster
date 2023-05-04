import { CheckCircle, PencilSimple, Trash } from 'phosphor-react'

export function TableRow({ taskList }) {
  return (
    <>
      {taskList.map((task) => (
        <tr className="bg-gray-700 hover:bg-gray-600" key={task.id}>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5 w-2/4 rounded-tl-lg pl-6">
            <div className="flex items-center gap-2">
              <button className="rounded-full">
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="text-gray-300 hover:text-gray-200"
                />
              </button>

              {task.title}
            </div>
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5">
            {task.category}
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5">
            {task.status === 'Pendente' ? (
              <div className="flex items-center gap-2">
                <span className="before:block before:w-2 before:h-2 before:rounded-full before:bg-red-400" />
                {task.status}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="before:block before:w-2 before:h-2 before:rounded-full before:bg-green-300" />
                {task.status}
              </div>
            )}
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5">
            {task.completionDate}
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5 rounded-tr-lg pr-6">
            <div className="flex items-center gap-4">
              <button>
                <PencilSimple
                  size={20}
                  weight="fill"
                  className="text-gray-300 hover:text-gray-200"
                />
              </button>
              <button>
                <Trash
                  size={20}
                  weight="fill"
                  className="text-red-400 hover:text-red-700"
                />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  )
}
