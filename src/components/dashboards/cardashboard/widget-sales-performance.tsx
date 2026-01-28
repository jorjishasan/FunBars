'use client'

import { Sparkles } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'

const SalesPerformanceCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-col items-start gap-1 pb-0 px-6'>
        <div className='flex w-full items-center justify-between gap-2'>
          <div className='flex items-center gap-2'>
            <span className='relative flex shrink-0 overflow-hidden size-8 rounded-sm'>
              <span className='flex size-full items-center justify-center bg-primary/10 text-primary shrink-0 rounded-md'>
                <Sparkles className='size-4' />
              </span>
            </span>
            <span className='text-lg'>Sales performance</span>
          </div>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm' className='h-7 px-2 py-1 text-xs'>
                Details
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='flex items-center pb-3 gap-2'>
          <span className='text-2xl font-semibold'>68K</span>
          <Badge
            variant='secondary'
            className='bg-primary/10 text-primary hover:bg-primary/5 rounded-sm px-2 py-0.5 text-xs font-medium'
          >
            -6%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='flex flex-1 flex-col gap-4 px-6 pt-0'>
        <Separator className='bg-border shrink-0 h-px w-full' />
        <div className='grid flex-1 grid-cols-2'>
          {/* Online Store Column */}
          <div className='flex flex-1 flex-col gap-2.5 p-2'>
            <div className='flex flex-col gap-1'>
              <span className='text-muted-foreground text-sm'>Online Store</span>
              <div className='flex items-center gap-2'>
                <span className='text-2xl font-medium'>88</span>
                <Badge
                  variant='secondary'
                  className='bg-primary/10 text-primary hover:bg-primary/5 rounded-sm px-3 py-0.5 text-xs font-medium'
                >
                  Good
                </Badge>
              </div>
            </div>
            {/* Stacked Bars - using gap-2 as requested */}
            <div className='flex flex-1 flex-col justify-between gap-[10px]'>
              {Array.from({ length: 10 }).map((_, index) => {
                // 88 score -> ~9/10 bars filled (index 1 to 9). 0 is top (empty).
                const isActive = index >= 1
                return (
                  <div
                    key={index}
                    className='bg-primary/20 relative w-full overflow-hidden h-2 rounded-[2px]'
                  >
                    <div
                      className='bg-orange-500 h-full w-full flex-1 transition-all'
                      style={{
                        transform: isActive ? 'translateX(0%)' : 'translateX(-100%)'
                      }}
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
                  className='bg-primary/10 text-primary hover:bg-primary/5 rounded-sm px-3 py-0.5 text-xs font-medium'
                >
                  Average
                </Badge>
              </div>
            </div>
            {/* Stacked Bars - using gap-2 as requested */}
            <div className='flex flex-1 flex-col justify-between gap-2'>
              {Array.from({ length: 10 }).map((_, index) => {
                // 64 score -> ~6/10 bars filled. Top 4 empty (0-3). 4-9 filled.
                const isActive = index >= 4
                return (
                  <div
                    key={index}
                    className='bg-primary/20 relative w-full overflow-hidden h-2 rounded-[2px]'
                  >
                    <div
                      className='bg-teal-600 h-full w-full flex-1 transition-all'
                      style={{
                        transform: isActive ? 'translateX(0%)' : 'translateX(-100%)'
                      }}
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
