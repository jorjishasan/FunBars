'use client'

import { Check, Circle, EllipsisVertical, MapPin, UserCheck, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Order {
  id: string
  sender: {
    name: string
    address: string
  }
  receiver: {
    name: string
    address: string
  }
}

const newOrdersData: Order[] = [
  {
    id: '1',
    sender: {
      name: 'Rahman Ahmed',
      address: '101 Dhanmondi, Dhaka(BD), 1205'
    },
    receiver: {
      name: 'Fatima Khan',
      address: '203 Gulshan, Dhaka(BD), 1212'
    }
  },
  {
    id: '2',
    sender: {
      name: 'Hasan Ali',
      address: '305 Mirpur, Dhaka(BD), 1216'
    },
    receiver: {
      name: 'Ayesha Rahman',
      address: '407 Uttara, Dhaka(BD), 1230'
    }
  }
]

const pendingOrdersData: Order[] = [
  {
    id: '3',
    sender: {
      name: 'Karim Uddin',
      address: '501 Banani, Dhaka(BD), 1213'
    },
    receiver: {
      name: 'Nusrat Jahan',
      address: '603 Wari, Dhaka(BD), 1203'
    }
  },
  {
    id: '4',
    sender: {
      name: 'Shahid Hossain',
      address: '705 Motijheel, Dhaka(BD), 1000'
    },
    receiver: {
      name: 'Tasnim Begum',
      address: '807 Tejgaon, Dhaka(BD), 1208'
    }
  }
]

const shippingOrdersData: Order[] = [
  {
    id: '5',
    sender: {
      name: 'Mohammad Ali',
      address: '901 Chittagong, Chittagong(BD), 4000'
    },
    receiver: {
      name: 'Sultana Akter',
      address: '1003 Sylhet, Sylhet(BD), 3100'
    }
  },
  {
    id: '6',
    sender: {
      name: 'Abdul Rahman',
      address: '1105 Rajshahi, Rajshahi(BD), 6000'
    },
    receiver: {
      name: 'Rashida Khatun',
      address: '1207 Khulna, Khulna(BD), 9000'
    }
  }
]

const OrderItem = ({ order }: { order: Order }) => (
  <>
    <li className='grid items-center text-primary gap-x-4'>
      <div
        role='status'
        className='timeline-dot col-start-2 col-end-3 row-start-1 row-end-1 flex items-center justify-center rounded-full border border-current border-none mb-1.25 [&>*:not(:nth-child(4))]:hidden [&>*:nth-child(4)]:block'
      >
        <Circle className='size-2.5' />
        <Check className='size-3' />
        <X className='size-3' />
        <UserCheck className='text-primary size-4' />
      </div>
      <hr
        role='separator'
        aria-orientation='vertical'
        className='col-start-2 col-end-3 row-start-2 row-end-2 mx-auto flex h-full min-h-16 w-0.5 justify-center rounded-full border-l border-dashed border-muted bg-transparent'
      />
      <p
        role='heading'
        aria-level={3}
        className='row-start-1 row-end-1 line-clamp-1 max-w-full truncate col-start-3 col-end-4 mr-auto text-left text-primary text-sm font-normal'
      >
        Sender
      </p>
      <div className='text-card-foreground row-start-2 row-end-2 col-start-3 col-end-4 mr-auto text-left flex flex-col gap-0.5 pb-2'>
        <span className='font-medium'>{order.sender.name}</span>
        <span className='text-muted-foreground text-sm'>{order.sender.address}</span>
      </div>
    </li>
    <li className='grid items-center text-primary mt-2 gap-x-4'>
      <div
        role='status'
        className='timeline-dot col-start-2 col-end-3 row-start-1 row-end-1 flex items-center justify-center rounded-full border border-current border-none [&>*:not(:nth-child(4))]:hidden [&>*:nth-child(4)]:block'
      >
        <Circle className='size-2.5' />
        <Check className='size-3' />
        <X className='size-3' />
        <MapPin className='text-primary size-4' />
      </div>
      <p
        role='heading'
        aria-level={3}
        className='row-start-1 row-end-1 line-clamp-1 max-w-full truncate col-start-3 col-end-4 mr-auto text-left text-primary text-sm font-normal'
      >
        Receiver
      </p>
      <div className='text-card-foreground row-start-2 row-end-2 col-start-3 col-end-4 mr-auto text-left mt-0.5 flex flex-col gap-0.5 pb-0'>
        <span className='font-medium'>{order.receiver.name}</span>
        <span className='text-muted-foreground text-sm'>{order.receiver.address}</span>
      </div>
    </li>
  </>
)

const OrdersCard = () => {
  return (
    <Card className='bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm gap-4 xl:col-span-2'>
      <CardHeader className='!flex !flex-row items-start justify-between space-y-0 gap-2 px-6 pb-0'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>Orders</span>
          <span className='text-muted-foreground text-sm'>75 Deliveries in progress</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='text-muted-foreground hover:bg-accent hover:text-accent-foreground size-6 shrink-0 rounded-full ml-auto'
            >
              <EllipsisVertical className='size-4' />
              <span className='sr-only'>Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View All</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <Tabs defaultValue='new' className='flex flex-col gap-4'>
        <TabsList className='text-muted-foreground inline-flex h-9 items-center justify-center bg-background w-full rounded-none border-b p-0'>
          <TabsTrigger
            value='new'
            className='inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap bg-background data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent'
          >
            New
          </TabsTrigger>
          <TabsTrigger
            value='pending'
            className='inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap bg-background data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent'
          >
            Pending
          </TabsTrigger>
          <TabsTrigger
            value='shipping'
            className='inline-flex flex-1 items-center justify-center gap-1.5 px-2 py-1 text-sm font-medium whitespace-nowrap bg-background data-[state=active]:border-primary h-full rounded-none border-0 border-b-2 border-transparent'
          >
            Shipping
          </TabsTrigger>
        </TabsList>
        <TabsContent value='new' className='outline-none flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={newOrdersData[0]} />
            </ul>
            <div className='pl-4'>
              <Separator />
            </div>
          </div>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={newOrdersData[1]} />
            </ul>
          </div>
        </TabsContent>
        <TabsContent value='pending' className='outline-none flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={pendingOrdersData[0]} />
            </ul>
            <div className='pl-4'>
              <Separator />
            </div>
          </div>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={pendingOrdersData[1]} />
            </ul>
          </div>
        </TabsContent>
        <TabsContent value='shipping' className='outline-none flex flex-col gap-4'>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={shippingOrdersData[0]} />
            </ul>
            <div className='pl-4'>
              <Separator />
            </div>
          </div>
          <div className='flex flex-col gap-4 pr-6 pl-2'>
            <ul className='grid [&>li]:grid-cols-[0_min-content_1fr]'>
              <OrderItem order={shippingOrdersData[1]} />
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

export default OrdersCard
