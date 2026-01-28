'use client'

import { MoreVertical } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface ConditionItem {
  label: string
  value: number
  subtext: string
  trend: string
  color: string
}

const conditions: ConditionItem[] = [
  {
    label: 'Excellent',
    value: 55,
    subtext: '12% increase',
    trend: '+25%',
    color: 'stroke-chart-1'
  },
  {
    label: 'Good',
    value: 20,
    subtext: '24 vehicles',
    trend: '+30%',
    color: 'stroke-chart-2'
  },
  {
    label: 'Average',
    value: 12,
    subtext: '182 Tasks',
    trend: '-15%',
    color: 'stroke-chart-3'
  },
  {
    label: 'Bad',
    value: 8,
    subtext: '9 vehicles',
    trend: '+35%',
    color: 'stroke-chart-5'
  },
  {
    label: 'Not Working',
    value: 5,
    subtext: '3 vehicles',
    trend: '-2%',
    color: 'stroke-primary'
  }
]

const VehiclesConditionCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-row items-center justify-between pb-6 border-b px-6'>
        <span className='text-lg font-semibold'>Vehicles Condition</span>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:text-foreground size-6 rounded-full flex items-center justify-center'>
              <MoreVertical className='size-4' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='px-6 flex flex-1 flex-col justify-between gap-4 pt-6'>
        {conditions.map((item) => (
          <div key={item.label} className='flex items-center justify-between gap-2'>
            <div className='flex items-center justify-between gap-3'>
              <div className='relative'>
                <svg
                  width='52'
                  height='52'
                  viewBox='-6.5 -6.5 65 65'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  style={{ transform: 'rotate(-90deg)' }}
                  className='relative'
                >
                  <circle
                    r='26'
                    cx='26'
                    cy='26'
                    fill='transparent'
                    strokeWidth='5'
                    strokeDasharray='164'
                    strokeDashoffset='0'
                    className='stroke-muted/20'
                  ></circle>
                  <circle
                    r='26'
                    cx='26'
                    cy='26'
                    strokeWidth='5'
                    strokeLinecap='round'
                    strokeDashoffset={164 - (164 * item.value) / 100}
                    fill='transparent'
                    strokeDasharray='164'
                    className={item.color}
                  ></circle>
                </svg>
                <div className='absolute inset-0 flex items-center justify-center text-xs'>
                  {item.value}%
                </div>
              </div>
              <div className='flex flex-col gap-0.5'>
                <span className='font-medium'>{item.label}</span>
                <span className='text-muted-foreground text-sm'>{item.subtext}</span>
              </div>
            </div>
            <span
              className={cn(
                'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs font-medium rounded-sm',
                'border-transparent bg-primary/10 text-primary'
              )}
            >
              {item.trend}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default VehiclesConditionCard
