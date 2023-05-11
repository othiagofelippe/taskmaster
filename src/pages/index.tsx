import { NewTaskModal } from '@/components/NewTaskModal'
import { Table } from '@/components/Table'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Table />
      <NewTaskModal />
    </div>
  )
}
