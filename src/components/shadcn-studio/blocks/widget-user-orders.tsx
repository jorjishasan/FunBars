'use client'

import { useState } from 'react'

import { Box, MoreVertical, Package, Truck } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'

import { cn } from '@/lib/utils'

const UserOrdersCard = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState('packed')
  const totalOrders = 4689

  const tabs = [
    { id: 'packed', label: 'Packed', icon: <Truck className='h-4 w-4' /> },
    { id: 'shipped', label: 'Shipped', icon: <Box className='h-4 w-4' /> },
    { id: 'received', label: 'Received', icon: <Package className='h-4 w-4' /> }
  ]

  const progressItems = [
    { label: 'Packing Pending', value: 4250, progress: 90 },
    { label: 'Packing in Progress', value: 2150, progress: 46 },
    { label: 'Packing Complete', value: 1750, progress: 37 }
  ]

  return (
    <Card className={cn('', className)}>
      <CardHeader className='flex flex-row items-start justify-between pb-4'>
        <div className='flex items-center gap-3'>
          <Avatar className='h-12 w-12'>
            <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
            <AvatarFallback>JW</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <span className='text-base font-semibold'>@jackwilliams</span>
            <span className='text-muted-foreground text-sm'>Business</span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:text-foreground'>
              <MoreVertical className='h-5 w-5' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex flex-col gap-6 pt-0'>
        <div className='flex flex-col gap-1'>
          <span className='text-3xl font-semibold'>{totalOrders.toLocaleString()} Orders</span>
        </div>

        {/* Tabs */}
        <div className='flex gap-2'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Progress Items */}
        <div className='flex flex-col gap-4'>
          {progressItems.map((item, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium'>{item.label}</span>
                <span className='text-sm font-semibold'>{item.value.toLocaleString()}</span>
              </div>
              <Progress value={item.progress} className='h-2' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default UserOrdersCard
