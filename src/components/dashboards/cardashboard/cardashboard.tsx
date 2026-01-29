'use client'

import { AppIconRail } from '@/components/dashboards/cardashboard/app-icon-rail'
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
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          #car-dashboard-wrapper .car-dashboard-sidebar {
            left: 4rem !important;
          }
          #car-dashboard-wrapper [data-state=collapsed] .car-dashboard-sidebar {
            left: calc(4rem - var(--sidebar-width)) !important;
          }
        `
      }} />
      <div id="car-dashboard-wrapper" className="flex h-screen overflow-hidden">
        <AppIconRail />
        <div className="ml-16 flex flex-1 flex-col overflow-hidden">
          <SidebarProvider defaultOpen>
            <AppSidebar />
            <SidebarInset className="overflow-hidden">
              <div className="flex h-full flex-col border-r">
                <AppNavbar />
                <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="grid grid-cols-6 gap-6">
                    <VehicleOverviewCard className="col-span-full rounded-[14px] xl:col-span-3" />
                    <UserProfileCard className="col-span-full rounded-[14px] md:col-span-3" />
                    <SalesPerformanceCard className="col-span-full rounded-[14px] md:col-span-3 xl:col-span-2" />
                    <VehiclesConditionCard className="col-span-full rounded-[14px] md:col-span-3 xl:col-span-2" />
                    <CustomerRatingsCard className="col-span-full rounded-[14px] md:col-span-3 xl:col-span-2" />
                    <OnRouteVehiclesCard className="col-span-full rounded-[14px]" />
                  </div>
                </main>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </div>
    </>
  )
}
