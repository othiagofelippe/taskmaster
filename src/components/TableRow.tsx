import { useTask } from '@/context/TaskContext'
import { CheckCircle, PencilSimple, Trash } from 'phosphor-react'
import { useState } from 'react'

export function TableRow() {
  const { tasks, deleteTask, editTask, completeTask } = useTask()
  const [editing, setEditing] = useState(false)
  function handleEditTask() {
    setEditing(true)
  }

  return (
    <>
      {tasks?.map((task) => (
        <tr className="bg-gray-700 hover:bg-gray-600" key={task.id}>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5 w-2/4 rounded-tl-lg pl-6">
            <div className="flex items-center gap-2">
              <button
                className="rounded-full"
                onClick={() => completeTask(task.id)}
              >
                {task.completed ? (
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="text-green-300 hover:text-green-400"
                  />
                ) : (
                  <CheckCircle
                    size={20}
                    weight="fill"
                    className="text-gray-300 hover:text-gray-200"
                  />
                )}
              </button>

              {task.taskName}
            </div>
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5">
            {task.taskCategory}
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5">
            {!task.completed ? (
              <div className="flex items-center gap-2">
                <span className="before:block before:w-2 before:h-2 before:rounded-full before:bg-red-400" />
                Pendente
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="before:block before:w-2 before:h-2 before:rounded-full before:bg-green-300" />
                Concluída
              </div>
            )}
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5">
            {task.taskDate}
          </td>
          <td className=" border-t-4 border-solid border-gray-800 p-4 text-sm leading-5 rounded-tr-lg pr-6">
            <div className="flex items-center gap-4">
              <button onClick={handleEditTask}>
                <PencilSimple
                  size={20}
                  weight="fill"
                  className="text-gray-300 hover:text-gray-200"
                />
              </button>
              <button onClick={() => deleteTask(task.id)}>
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
