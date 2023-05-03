import clsx from 'clsx'
import { Roboto } from 'next/font/google'
import { ButtonProps } from '@/types'

const roboto = Roboto({ subsets: ['latin'], weight: '700' })

export function Button({
  size = 'md',
  hasIcon = false,
  variant = 'filled',
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `bg-green-400 hover:bg-green-300 text-white font-bold rounded-md transition-all ease-in-out ${roboto.className}`,
        {
          'text-sm py-2 px-4': size === 'sm',
          'text-base py-3 px-5': size === 'md',
          'text-base py-4 px-8': size === 'lg',
          'flex gap-2 items-center': hasIcon === true,
          'text-green-300 hover:text-white hover:bg-green-400 bg-opacity-0 border-[1px] border-green-400':
            variant === 'outline',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
