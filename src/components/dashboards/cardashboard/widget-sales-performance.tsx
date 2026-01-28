'use client'

import { MoreHorizontal, Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const SalesPerformanceCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-col items-start gap-2 border-b pb-6 px-6'>
        <div className='flex w-full items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <span className='relative flex shrink-0 overflow-hidden size-8 rounded-md'>
              <span className='flex size-full items-center justify-center bg-muted text-foreground shrink-0 rounded-md'>
                <Sparkles className='size-4' />
              </span>
            </span>
            <span className='text-lg font-semibold'>Sales performance</span>
          </div>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm' className='h-8 px-3 text-xs font-medium'>
                Details
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-2xl font-semibold'>68K</span>
          <Badge
            variant='secondary'
            className='bg-muted text-foreground hover:bg-muted/80 rounded-md px-2 py-0.5 text-xs font-medium'
          >
            -6%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='flex flex-1 flex-col gap-4 px-6 pt-6'>
        <div className='grid flex-1 grid-cols-2'>
          {/* Online Store Column */}
          <div className='flex flex-1 flex-col gap-2.5 p-2'>
            <div className='flex flex-col gap-1'>
              <span className='text-muted-foreground text-sm'>Online Store</span>
              <div className='flex items-center gap-2'>
                <span className='text-2xl font-medium'>88</span>
                <Badge
                  variant='secondary'
                  className='bg-muted text-foreground hover:bg-muted/80 rounded-md px-3 py-0.5 text-xs font-medium'
                >
                  Good
                </Badge>
              </div>
            </div>
            {/* Stacked Bars - 8 total, filling from bottom */}
            <div className='flex flex-1 flex-col justify-between gap-2'>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
                // Total 8 bars. Score 88 corresponds to ~7 bars filled (indices 1 to 7). Index 0 is empty.
                const isActive = index >= 1 
                return (
                  <div
                    key={index}
                    className='bg-muted relative w-full overflow-hidden h-2.5 rounded-sm'
                  >
                    <div
                      className='bg-orange-500 h-full w-full flex-1 transition-all'
                      style={{ transform: isActive ? 'translateX(0%)' : 'translateX(-100%)' }}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Offline Store Column */}
          <div className='flex flex-1 flex-col gap-2.5 p-2'>
            <div className='flex flex-col gap-1'>
              <span className='text-muted-foreground text-sm'>Offline Store</span>
              <div className='flex items-center gap-2'>
                <span className='text-2xl font-medium'>64</span>
                <Badge
                  variant='secondary'
                  className='bg-muted text-foreground hover:bg-muted/80 rounded-md px-3 py-0.5 text-xs font-medium'
                >
                  Average
                </Badge>
              </div>
            </div>
            {/* Stacked Bars - 8 total, filling from bottom */}
            <div className='flex flex-1 flex-col justify-between gap-2'>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
                // Total 8 bars. Score 64 corresponds to ~5 bars filled (indices 3 to 7). Indices 0-2 empty.
                const isActive = index >= 3
                return (
                  <div
                    key={index}
                    className='bg-muted relative w-full overflow-hidden h-2.5 rounded-sm'
                  >
                    <div
                      className='bg-teal-600 h-full w-full flex-1 transition-all'
                      style={{ transform: isActive ? 'translateX(0%)' : 'translateX(-100%)' }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SalesPerformanceCard
