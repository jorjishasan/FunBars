'use client'

import { useEffect, useState } from 'react'

import { ArrowDown, ArrowUp, Car, Clock, MoreVertical } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

// Hardcoded for simplicity as per requirements to mimic image
const vehicleStatuses = [
  {
    label: 'On the way',
    percentage: 33.3,
    duration: '2hr 10min',
    icon: <Car className='size-4' />,
    color: 'bg-muted',
    iconColor: 'text-muted-foreground'
  },
  {
    label: 'Unloading',
    percentage: 23.5,
    duration: '3hr 15min',
    icon: <ArrowDown className='size-4' />,
    color: 'bg-orange-500',
    iconColor: 'text-orange-500'
  },
  {
    label: 'Loading',
    percentage: 22.1,
    duration: '1hr 24min',
    icon: <ArrowUp className='size-4' />,
    color: 'bg-teal-600',
    iconColor: 'text-teal-600'
  },
  {
    label: 'Waiting',
    percentage: 21.1,
    duration: '5hr 19min',
    icon: <Clock className='size-4' />,
    color: 'bg-slate-700',
    iconColor: 'text-slate-700'
  }
]

const VehicleOverviewCard = ({ className }: { className?: string }) => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-center justify-between border-b pb-6 px-6'>
        <span className='text-lg font-semibold'>Vehicle overview</span>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:text-foreground size-6 rounded-full flex items-center justify-center'>
              <MoreVertical className='h-5 w-5' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export Data</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex flex-col gap-6 px-6 pt-6'>
        {/* Progress Bar Section */}
        <div className='flex flex-col gap-3'>
          {/* Labels - using proportional widths to match source code provided */}
          <div className='text-muted-foreground flex text-sm'>
            {vehicleStatuses.map((status, index) => (
                <div key={status.label} className="flex flex-col gap-1" style={{ width: `${status.percentage}%` }}>
                    <span>{status.label}</span>
                    <div className="bg-muted-foreground/20 h-2.5 w-0.5 rounded-full" />
                </div>
            ))}
          </div>

          {/* Segmented Progress Bar */}
          <div className='flex h-12 w-full overflow-hidden rounded-md'>
            {vehicleStatuses.map((status) => (
              <div
                key={status.label}
                className={cn(
                  'flex items-center justify-center text-sm font-medium transition-all duration-1000 ease-out',
                  status.color === 'bg-muted' ? 'bg-primary/10 text-primary' : 'text-white',
                  status.color !== 'bg-muted' && status.color
                )}
                style={{
                  width: isAnimated ? `${status.percentage}%` : '0%',
                  transitionDelay: `${vehicleStatuses.indexOf(status) * 100}ms`
                }}
              >
                <span className={cn('transition-opacity duration-500', isAnimated ? 'opacity-100' : 'opacity-0')}>
                  {status.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed List Section */}
        <div className='flex flex-col gap-0'>
          {vehicleStatuses.map((status, index) => (
            <div key={status.label}>
              <div className={cn('flex items-center justify-between py-3', index < vehicleStatuses.length - 1 ? 'border-b' : '')}>
                <div className='text-muted-foreground flex items-center gap-4'>
                  <div className="[&>svg]:size-4">
                    {status.icon}
                  </div>
                  <span className='text-sm font-medium'>{status.label}</span>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='text-sm font-semibold'>{status.duration}</span>
                  <span className='text-muted-foreground text-sm'>{status.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default VehicleOverviewCard
