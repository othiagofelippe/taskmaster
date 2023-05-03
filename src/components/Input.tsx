import clsx from 'clsx'
import { Roboto } from 'next/font/google'
import { InputProps } from '@/types'

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
})

export function Input({ label, error, className, ...rest }: InputProps) {
  return (
    <div className="">
      {label && (
        <label
          className={`text-sm block mb-2 ${roboto.className}`}
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}

      <input
        className={clsx(
          `rounded-md  bg-gray-900 text-gray-300 p-4 placeholder:text-gray-400 ${roboto.className}`,
          {
            'border-[1px] border-red-400': error,
          },
          className,
        )}
        {...rest}
      />
      {error && (
        <p className={`mt-1 text-sm text-red-700 ${roboto.className}`}>
          {error}
        </p>
      )}
    </div>
  )
}
