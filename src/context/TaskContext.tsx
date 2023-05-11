import { createContext, useState, useContext, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface Task {
  id: string
  taskName: string
  taskCategory: string
  taskDate: string
  completed: boolean
}

interface TaskContextData {
  tasks: Task[]
  addTask: (task: Omit<Task, 'id'>) => void
  completeTask: (id: string) => void
  editTask: (id: string, updatedTask: Task) => void
  deleteTask: (id: string) => void
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData)

interface TaskProviderProps {
  children: ReactNode
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(task: Omit<Task, 'id'>) {
    const newTask = {
      id: uuidv4(),
      ...task,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  function completeTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      } else {
        return task
      }
    })
    setTasks(updatedTasks)
  }

  function editTask(id: string, updatedTask: Task) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return updatedTask
      } else {
        return task
      }
    })
    setTasks(updatedTasks)
  }

  function deleteTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, completeTask, editTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)
