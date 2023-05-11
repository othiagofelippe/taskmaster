import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, XCircle } from 'phosphor-react'
import { Input } from './Input'
import { Button } from './Button'

export function NewTaskModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Edit profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-900 opacity-70 fixed inset-0" />
        <Dialog.Content className="fixed top-2/4 left-2/4 max-w-[512px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-gray-800 py-10 px-12">
          <Dialog.Title className="text-grat-200 text-2xl font-bold">
            Nova tafera
          </Dialog.Title>
          <Dialog.Description className="text-gray-300 mt-2 mb-5 text-sm">
            Digite o nome e a categoria da sua nova tarefa, depois clique em
            ”Adicionar tarefa”. Certifique-se de escolher um nome que descreva
            claramente a tarefa. Você pode editar ou excluir a tarefa a qualquer
            momento. Boa sorte!
          </Dialog.Description>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                placeholder="Fazer exercícios físicos"
                label="Nome da tarefa"
                className="w-full"
              />
              <Input placeholder="Saúde" label="Categoria" className="w-full" />
              <Input type="date" label="Data de conclusão" className="w-full" />
            </div>
            <Button
              type="submit"
              hasIcon
              className="justify-center mt-10 w-full"
            >
              Adicionar tafera <ArrowRight size={20} weight="fill" />
            </Button>
          </form>

          <Dialog.Close asChild>
            <button
              className="text-gray-300 hover:text-gray-200 cursor-pointer absolute top-6 right-6 border-0 rounded-full"
              aria-label="Close"
            >
              <XCircle size={24} weight="fill" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
