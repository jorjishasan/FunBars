'use client'

import { MoreVertical, Truck } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

const vehicles = [
  {
    id: 'VOL-159145',
    start: 'Paris 19, France',
    end: 'Dresden, Germany',
    warning: 'No Warning',
    progress: 50,
    status: 'normal'
  },
  {
    id: 'VOL-163825',
    start: 'Tokyo 23, Japan',
    end: 'Budapest, Hungary',
    warning: 'Fuel Problems',
    progress: 75,
    status: 'warning'
  },
  {
    id: 'VOL-182624',
    start: 'New York City, USA',
    end: 'Kyoto, Japan',
    warning: 'Temperature Not Optimal',
    progress: 25,
    status: 'warning'
  },
  {
    id: 'VOL-27568',
    start: 'Berlin, Germany',
    end: 'Cape Town, South Africa',
    warning: 'Ecu Not Responding',
    progress: 50,
    status: 'error'
  },
  {
    id: 'VOL-300168',
    start: 'Sydney, Australia',
    end: 'Buenos Aires, Argentina',
    warning: 'Oil Leakage',
    progress: 25,
    status: 'error'
  }
]

const OnRouteVehiclesCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-row items-center justify-between pb-4'>
        <span className='font-semibold'>On route vehicle</span>
        <DropdownMenu modal={false}>
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
      <CardContent className='p-0'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[50px]'>
                <Checkbox />
              </TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Starting route</TableHead>
              <TableHead>Ending route</TableHead>
              <TableHead>Warnings</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-muted'>
                      <Truck className='h-4 w-4' />
                    </div>
                    <span className='font-medium'>{vehicle.id}</span>
                  </div>
                </TableCell>
                <TableCell className='text-muted-foreground'>{vehicle.start}</TableCell>
                <TableCell className='text-muted-foreground'>{vehicle.end}</TableCell>
                <TableCell>
                  <Badge variant='secondary' className='font-normal'>
                    {vehicle.warning}
                  </Badge>
                </TableCell>
                <TableCell className='w-[200px]'>
                  <div className='flex items-center gap-3'>
                    <Progress
                      value={vehicle.progress}
                      className={cn(
                        'h-2 w-full',
                        vehicle.status === 'normal'
                          ? '[&>div]:bg-orange-500 bg-orange-100'
                          : vehicle.status === 'warning'
                          ? '[&>div]:bg-teal-500 bg-teal-100'
                          : '[&>div]:bg-orange-500 bg-orange-100'
                      )}
                    />
                    <span className='text-sm font-medium'>{vehicle.progress}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='flex items-center justify-between px-4 py-4'>
            <span className="text-sm text-muted-foreground">Showing 1 to 5 of 25 entries</span>
            <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="default" size="sm" className="bg-black text-white hover:bg-black/90">1</Button>
                <Button variant="ghost" size="sm">2</Button>
                <Button variant="ghost" size="sm">...</Button>
                <Button variant="outline" size="sm">Next</Button>
            </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default OnRouteVehiclesCard
