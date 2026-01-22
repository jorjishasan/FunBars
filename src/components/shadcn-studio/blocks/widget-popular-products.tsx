'use client'

import { MoreVertical } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'

interface Product {
  id: string
  name: string
  image: string
  price: string
  visitors: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Nike Vision Low Shoes',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    price: '$5,600',
    visitors: '10.6K'
  },
  {
    id: '2',
    name: 'Adidas Ultraboost 21',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    price: '$4,500',
    visitors: '4.5K'
  },
  {
    id: '3',
    name: 'Puma RS-X Toys',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    price: '$3,200',
    visitors: '2K'
  },
  {
    id: '4',
    name: 'New Balance 550',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    price: '$2,800',
    visitors: '1.8K'
  },
  {
    id: '5',
    name: 'Reebok Classic Leather',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    price: '$2,200',
    visitors: '1.2K'
  }
]

const PopularProductsCard = ({ className }: { className?: string }) => {
  const totalVisitors = '10.4K'

  return (
    <Card className={cn('flex h-[380px] flex-col', className)}>
      <CardHeader className='flex flex-row items-start justify-between pb-2'>
        <div className='flex flex-col gap-1'>
          <span className='text-lg font-semibold'>Popular product</span>
          <span className='text-muted-foreground text-sm'>Total {totalVisitors} visitors</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='text-muted-foreground hover:text-foreground'>
              <MoreVertical className='h-5 w-5' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>View All</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className='flex flex-1 flex-col gap-0 overflow-hidden pt-0'>
        <div className='flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          {products.map((product, index) => (
            <div key={product.id}>
              <div className='flex items-center gap-3 p-3'>
                <img src={product.image} alt={product.name} className='h-12 w-12 shrink-0 rounded-md object-cover' />
                <div className='flex flex-1 flex-col gap-1'>
                  <span className='text-sm font-semibold'>{product.name}</span>
                  <div className='flex items-center justify-between'>
                    <span className='text-muted-foreground text-xs'>{product.price}</span>
                    <span className='text-muted-foreground text-xs'>{product.visitors}</span>
                  </div>
                </div>
              </div>
              {index < products.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PopularProductsCard
