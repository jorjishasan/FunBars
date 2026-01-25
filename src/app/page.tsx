import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllDashboards } from '@/lib/dashboard-config'
import { ArrowRightIcon, BarChart3Icon, TruckIcon } from 'lucide-react'

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'development':
      return 'bg-yellow-100 text-yellow-800'
    case 'planned':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getDashboardIcon = (id: string) => {
  switch (id) {
    case 'productsales':
      return <BarChart3Icon className="h-8 w-8" />
    case 'vehiclesales':
      return <TruckIcon className="h-8 w-8" />
    default:
      return <BarChart3Icon className="h-8 w-8" />
  }
}

const DashboardLanding = () => {
  const dashboards = getAllDashboards()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Unified Dashboard System
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Access all your business dashboards from one place
              </p>
            </div>
            <Button variant="outline">
              Admin Panel
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to Your Dashboard Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from the available dashboards below to access detailed analytics, 
            reports, and insights for different areas of your business.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((dashboard) => (
            <Card key={dashboard.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-${dashboard.color}-100 text-${dashboard.color}-600`}>
                    {getDashboardIcon(dashboard.id)}
                  </div>
                  <Badge className={getStatusColor(dashboard.status)}>
                    {dashboard.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{dashboard.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {dashboard.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Link href={dashboard.route}>
                  <Button 
                    className="w-full group" 
                    disabled={dashboard.status === 'planned'}
                  >
                    {dashboard.status === 'active' ? 'Open Dashboard' : 
                     dashboard.status === 'development' ? 'View Progress' : 'Coming Soon'}
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm border p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900">System Overview</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {dashboards.filter(d => d.status === 'active').length}
              </div>
              <p className="text-gray-600">Active Dashboards</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">
                {dashboards.filter(d => d.status === 'development').length}
              </div>
              <p className="text-gray-600">In Development</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600 mb-2">
                {dashboards.length}
              </div>
              <p className="text-gray-600">Total Dashboards</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Unified Dashboard System. Built for scalable business intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DashboardLanding