import React, { FC } from 'react'
import cx from 'classnames'

export const Cell: FC<{
  gutter: boolean
  stickyRight: boolean
  stickyLeft?: number
  disabled?: boolean
  className?: string
  active?: boolean
  children?: any
  width: number
  left: number
}> = ({
  children,
  gutter,
  stickyRight,
  active,
  disabled,
  className,
  width,
  left,
  stickyLeft,
}) => {
  return (
    <div
      className={cx(
        'dsg-cell',
        gutter && 'dsg-cell-gutter',
        disabled && 'dsg-cell-disabled',
        gutter && active && 'dsg-cell-gutter-active',
        stickyRight && 'dsg-cell-sticky-right',
        stickyLeft !== undefined && 'dsg-cell-sticky-left',
        className
      )}
      style={{
        width,
        left: stickyLeft !== undefined ? stickyLeft : (stickyRight ? undefined : left),
      }}
    >
      {children}
    </div>
  )
}
