'use client'

import { useState } from 'react'

import { ChevronLeft, ChevronRight, Headphones, Laptop, MoreVertical, Search, Smartphone, Upload, Watch } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { cn } from '@/lib/utils'

interface Product {
  id: string
  name: string
  brand: string
  image: string
  category: { name: string; icon: React.ReactNode }
  stock: boolean
  amount: string
  qty: number
  status: 'Publish' | 'Inactive'
}

const products: Product[] = [
  {
    id: '1',
    name: 'Samsung galaxy s35',
    brand: 'Samsung',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    category: { name: 'Smartphone', icon: <Smartphone className='h-4 w-4' /> },
    stock: true,
    amount: '$312',
    qty: 45,
    status: 'Publish'
  },
  {
    id: '2',
    name: 'Apple MacBook Pro',
    brand: 'Apple',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    category: { name: 'Laptop', icon: <Laptop className='h-4 w-4' /> },
    stock: true,
    amount: '$890',
    qty: 634,
    status: 'Publish'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM4',
    brand: 'Sony',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    category: { name: 'Headphone', icon: <Headphones className='h-4 w-4' /> },
    stock: false,
    amount: '$120',
    qty: 456,
    status: 'Inactive'
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    brand: 'Dell',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    category: { name: 'Laptop', icon: <Laptop className='h-4 w-4' /> },
    stock: false,
    amount: '$112',
    qty: 4,
    status: 'Publish'
  },
  {
    id: '5',
    name: 'Smart band 4',
    brand: 'Xiaomi',
    image: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/image%201.png',
    category: { name: 'Smartwatch', icon: <Watch className='h-4 w-4' /> },
    stock: false,
    amount: '$150',
    qty: 45,
    status: 'Inactive'
  }
]

const ProductTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalItems = 25

  return (
    <Card>
      <CardContent className='flex flex-col gap-4 p-6'>
        {/* Filters */}
        <div className='flex flex-wrap gap-3'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm'>
                Select Category <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Smartphone</DropdownMenuItem>
              <DropdownMenuItem>Laptop</DropdownMenuItem>
              <DropdownMenuItem>Headphone</DropdownMenuItem>
              <DropdownMenuItem>Smartwatch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm'>
                Select Stock <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>In Stock</DropdownMenuItem>
              <DropdownMenuItem>Out of Stock</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='sm'>
                Select Status <ChevronRight className='ml-2 h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>All</DropdownMenuItem>
              <DropdownMenuItem>Publish</DropdownMenuItem>
              <DropdownMenuItem>Inactive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Search and Actions */}
        <div className='flex items-center justify-between gap-4'>
          <div className='relative flex-1 max-w-sm'>
            <Search className='text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2' />
            <Input placeholder='Search product' className='pl-9' />
          </div>
          <div className='flex items-center gap-2'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='sm'>
                  5 <ChevronRight className='ml-2 h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>5</DropdownMenuItem>
                <DropdownMenuItem>10</DropdownMenuItem>
                <DropdownMenuItem>25</DropdownMenuItem>
                <DropdownMenuItem>50</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant='outline' size='sm'>
              <Upload className='mr-2 h-4 w-4' />
              Export
            </Button>
            <Button size='sm'>
              + Add Product
            </Button>
          </div>
        </div>

        <Separator />

        {/* Table */}
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-12'>
                  <input type='checkbox' className='rounded border-gray-300' />
                </TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>QTY</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='w-12'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <input type='checkbox' className='rounded border-gray-300' />
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <img src={product.image} alt={product.name} className='h-10 w-10 rounded-md object-cover' />
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium'>{product.name}</span>
                        <span className='text-muted-foreground text-xs'>{product.brand}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-2'>
                      <div className='text-muted-foreground'>{product.category.icon}</div>
                      <span className='text-sm'>{product.category.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={cn('h-5 w-10 rounded-full transition-colors', product.stock ? 'bg-green-500' : 'bg-gray-300')}>
                      <div className={cn('h-5 w-5 rounded-full bg-white shadow transition-transform', product.stock && 'translate-x-5')} />
                    </div>
                  </TableCell>
                  <TableCell className='font-medium'>{product.amount}</TableCell>
                  <TableCell>{product.qty}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === 'Publish' ? 'default' : 'secondary'}>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className='text-muted-foreground hover:text-foreground'>
                          <MoreVertical className='h-4 w-4' />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className='flex items-center justify-between'>
          <span className='text-muted-foreground text-sm'>
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
          </span>
          <div className='flex items-center gap-2'>
            <Button variant='outline' size='sm' disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>
              <ChevronLeft className='mr-1 h-4 w-4' />
              Previous
            </Button>
            <Button
              variant={currentPage === 1 ? 'default' : 'outline'}
              size='sm'
              onClick={() => setCurrentPage(1)}
            >
              1
            </Button>
            <Button
              variant={currentPage === 2 ? 'default' : 'outline'}
              size='sm'
              onClick={() => setCurrentPage(2)}
            >
              2
            </Button>
            <span className='px-2'>...</span>
            <Button variant='outline' size='sm' disabled={currentPage >= Math.ceil(totalItems / itemsPerPage)} onClick={() => setCurrentPage(p => p + 1)}>
              Next
              <ChevronRight className='ml-1 h-4 w-4' />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductTable
