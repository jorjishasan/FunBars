'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MoreVertical, Plus, Star } from 'lucide-react'
import { Line, LineChart, XAxis } from 'recharts'

// Data points approximated from the visual curve:
// Jan: Low
// Feb: Medium-High
// Mar: Medium-Low
// Apr: High Peak
// May: Medium-High
// Jun: Low Valley
// Jul: High End
const data = [
  { month: 'Jan', rating: 1.8, oldRating: 2.5 },
  { month: 'Feb', rating: 3.2, oldRating: 4.2 },
  { month: 'Mar', rating: 2.5, oldRating: 3.5 },
  { month: 'Apr', rating: 4.8, oldRating: 3.0 },
  { month: 'May', rating: 3.5, oldRating: 4.5 },
  { month: 'Jun', rating: 2.2, oldRating: 3.2 },
  { month: 'Jul', rating: 4.5, oldRating: 3.8 }
]

const CustomerRatingsCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-row items-center justify-between pb-6 border-b px-6'>
        <span className='text-lg font-semibold'>Customer Ratings</span>
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
      <CardContent className='px-6 flex flex-1 flex-col gap-6 pt-6'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-6'>
            <span className='text-3xl font-semibold'>4.5</span>
            <div className='flex gap-px text-amber-500'>
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className='size-5 fill-current' />
              ))}
              <div className='relative'>
                <Star className='size-5 fill-current text-amber-500/30' />
                <div className='absolute inset-0 overflow-hidden w-1/2'>
                  <Star className='size-5 fill-current' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-6'>
            <Badge
              variant='outline'
              className='bg-primary/10 text-primary border-transparent rounded-sm px-2 py-0.5 text-xs font-medium gap-1'
            >
              <Plus className='size-3' />
              5.0
            </Badge>
            <span className='text-muted-foreground text-sm'>Points from last month</span>
          </div>
        </div>

        <div className='h-[200px] w-full'>
          <ChartContainer
            config={{
              rating: {
                label: 'Rating',
                color: 'hsl(var(--chart-2))'
              }
            }}
            className='aspect-video min-h-[190px] w-full'
          >
            <LineChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 0 }}>
              <XAxis
                dataKey='month'
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type='monotone'
                dataKey='rating'
                stroke='hsl(173 58% 39%)' // Teal color hardcoded to match image better if variable fails
                strokeWidth={5}
                dot={(props) => {
                    const { cx, cy, payload } = props;
                    if (payload.month === 'Jul') { // Show dot only on last point
                        return (
                            <svg x={cx - 8} y={cy - 8} width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" key="dot">
                                <g>
                                    <circle cx="9" cy="9" r="4" fill="hsl(173 58% 39%)" stroke="white" strokeWidth="2"></circle>
                                    <circle cx="9" cy="9" r="8" stroke="hsl(173 58% 39%)" strokeWidth="1.5" fill="none"></circle>
                                </g>
                            </svg>
                        )
                    }
                    return <></>;
                }}
                activeDot={{ r: 6, fill: 'hsl(173 58% 39%)' }}
              />
              <Line
                type='monotone'
                dataKey='oldRating'
                stroke='hsl(var(--muted-foreground) / 0.3)'
                strokeWidth={3}
                strokeDasharray='8 8'
                dot={false}
                activeDot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerRatingsCard
