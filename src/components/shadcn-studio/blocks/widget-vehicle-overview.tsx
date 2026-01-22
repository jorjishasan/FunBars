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
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

interface VehicleStatus {
  label: string
  percentage: number
  duration: string
  icon: React.ReactNode
  color: string
  iconColor: string
}

const vehicleStatuses: VehicleStatus[] = [
  {
    label: 'On the way',
    percentage: 33.3,
    duration: '2hr 10min',
    icon: <Car className='h-5 w-5' />,
    color: 'bg-muted',
    iconColor: 'text-muted-foreground'
  },
  {
    label: 'Unloading',
    percentage: 23.5,
    duration: '3hr 15min',
    icon: <ArrowDown className='h-5 w-5' />,
    color: 'bg-red-500',
    iconColor: 'text-red-500'
  },
  {
    label: 'Loading',
    percentage: 22.1,
    duration: '1hr 24min',
    icon: <ArrowUp className='h-5 w-5' />,
    color: 'bg-teal-600',
    iconColor: 'text-teal-600'
  },
  {
    label: 'Waiting',
    percentage: 21.1,
    duration: '5hr 19min',
    icon: <Clock className='h-5 w-5' />,
    color: 'bg-slate-700',
    iconColor: 'text-slate-700'
  }
]

const VehicleOverviewCard = ({ className }: { className?: string }) => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-center justify-between pb-4'>
        <span className='text-lg font-semibold'>Vehicle overview</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:text-foreground'>
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
      <CardContent className='flex flex-col gap-6 pt-0'>
        {/* Progress Bar Section */}
        <div className='flex flex-col gap-3'>
          {/* Labels */}
          <div className='relative flex'>
            {vehicleStatuses.map((status, index) => {
              let leftOffset = 0
              for (let i = 0; i < index; i++) {
                leftOffset += vehicleStatuses[i].percentage
              }
              return (
                <div
                  key={status.label}
                  className='absolute'
                  style={{ left: `${leftOffset}%` }}
                >
                  <div className='h-2 w-px bg-border' />
                </div>
              )
            })}
            <div className='flex w-full'>
              {vehicleStatuses.map((status) => (
                <div
                  key={status.label}
                  className='flex flex-col items-center'
                  style={{ width: `${status.percentage}%` }}
                >
                  <span className='text-muted-foreground text-xs'>{status.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Segmented Progress Bar */}
          <div className='flex h-8 w-full overflow-hidden rounded-md'>
            {vehicleStatuses.map((status) => (
              <div
                key={status.label}
                className={cn(
                  'flex items-center justify-center text-sm font-medium text-white transition-all duration-1000 ease-out',
                  status.color
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
              <div className='flex items-center justify-between py-3'>
                <div className='flex items-center gap-3'>
                  <div className={cn(status.iconColor)}>
                    {status.icon}
                  </div>
                  <span className='text-sm font-medium'>{status.label}</span>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='text-sm font-semibold'>{status.duration}</span>
                  <span className='text-muted-foreground text-sm'>{status.percentage}%</span>
                </div>
              </div>
              {index < vehicleStatuses.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default VehicleOverviewCard
