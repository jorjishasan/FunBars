import { Button } from '@/components/ui/button'

const VehicleSalesDashboard = () => {
  return (
    <div className='flex min-h-dvh w-full flex-col bg-background'>
      {/* Dark Header */}
      <header className='bg-blue-900 text-white'>
        <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6'>
          <div className='flex items-center gap-4'>
            <span className='text-lg font-semibold'>Vehicle Sales Dashboard</span>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='sm' className='text-white hover:bg-blue-800'>
              Settings
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='mx-auto size-full max-w-7xl flex-1 py-6'>
        <div className='px-6 flex items-center justify-center min-h-[600px]'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Vehicle Sales Dashboard
            </h1>
            <p className='text-lg text-gray-600 mb-8'>
              Coming Soon - This dashboard is ready for development
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto'>
              <div className='bg-white p-6 rounded-lg shadow border'>
                <h3 className='font-semibold text-gray-900'>Vehicle Inventory</h3>
                <p className='text-sm text-gray-600 mt-2'>Track vehicle stock and availability</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow border'>
                <h3 className='font-semibold text-gray-900'>Sales Metrics</h3>
                <p className='text-sm text-gray-600 mt-2'>Monitor vehicle sales performance</p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow border'>
                <h3 className='font-semibold text-gray-900'>Customer Analytics</h3>
                <p className='text-sm text-gray-600 mt-2'>Analyze customer behavior and trends</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-blue-900 text-white'>
        <div className='mx-auto flex max-w-7xl items-center justify-center py-4'>
          <p className='text-sm'>
            {`©${new Date().getFullYear()}`} Unified Dashboard - Vehicle Sales Module
          </p>
        </div>
      </footer>
    </div>
  )
}

export default VehicleSalesDashboard