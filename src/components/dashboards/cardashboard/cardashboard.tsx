'use client'

import { AppNavbar } from '@/components/dashboards/cardashboard/app-navbar'
import { AppSidebar } from '@/components/dashboards/cardashboard/app-sidebar'
import CustomerRatingsCard from '@/components/dashboards/cardashboard/widget-customer-ratings'
import OnRouteVehiclesCard from '@/components/dashboards/cardashboard/widget-on-route-vehicles'
import SalesPerformanceCard from '@/components/dashboards/cardashboard/widget-sales-performance'
import UserProfileCard from '@/components/dashboards/cardashboard/widget-user-profile'
import VehicleOverviewCard from '@/components/dashboards/cardashboard/widget-vehicle-overview'
import VehiclesConditionCard from '@/components/dashboards/cardashboard/widget-vehicles-condition'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function CarDashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppNavbar />
        <div className='flex flex-1 flex-col gap-6 p-4 sm:px-6 sm:py-6 bg-background max-w-7xl mx-auto w-full'>
          <div className='grid grid-cols-6 gap-6'>
            <VehicleOverviewCard className='col-span-full xl:col-span-3 rounded-[14px]' />
            <UserProfileCard className='col-span-full md:col-span-3 rounded-[14px]' />
            <SalesPerformanceCard className='col-span-full md:col-span-3 xl:col-span-2 rounded-[14px]' />
            <VehiclesConditionCard className='col-span-full md:col-span-3 xl:col-span-2 rounded-[14px]' />
            <CustomerRatingsCard className='col-span-full md:col-span-3 xl:col-span-2 rounded-[14px]' />
            <OnRouteVehiclesCard className='col-span-full rounded-[14px]' />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
