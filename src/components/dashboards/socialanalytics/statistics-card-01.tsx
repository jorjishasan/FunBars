import type { ReactNode } from 'react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { cn } from '@/lib/utils'

// Statistics card data type
type StatisticsCardProps = {
  icon: ReactNode
  value: string
  title: string
  changePercentage: string
  className?: string
}

const StatisticsCard = ({ icon, value, title, changePercentage, className }: StatisticsCardProps) => {
  return (
    <Card
      className={cn(
        'bg-card text-card-foreground flex flex-col rounded-[14px] border py-6 gap-4 shadow-sm',
        className
      )}
    >
      <CardHeader className='flex flex-row items-center gap-2 py-0 px-6'>
        <div className='bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-md'>
          {icon}
        </div>
        <span className='text-base'>{value}</span>
      </CardHeader>
      <CardContent className='px-6 flex py-0 flex-col gap-2 pt-0'>
        <span className='font-semibold'>{title}</span>
        <p className='space-x-2'>
          <span className='text-sm'>{changePercentage}</span>
          <span className='text-muted-foreground text-sm'>than last week</span>
        </p>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard

