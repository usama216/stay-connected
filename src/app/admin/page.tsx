'use client'

import { useState, useEffect } from 'react'
import { Eye, Trash2, Edit, Search, Filter, LogOut, RefreshCw, CheckCircle, Clock, XCircle, AlertCircle, EyeOff } from 'lucide-react'
import Image from 'next/image'

interface ContactQuery {
  id: string
  name: string
  email: string
  company: string
  phone: string
  service_interest: string
  message: string
  status: 'new' | 'in_progress' | 'completed' | 'closed'
  created_at: string
  updated_at: string
}

export default function AdminDashboard() {
  const [queries, setQueries] = useState<ContactQuery[]>([])
  const [filteredQueries, setFilteredQueries] = useState<ContactQuery[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedQuery, setSelectedQuery] = useState<ContactQuery | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [queryToDelete, setQueryToDelete] = useState<ContactQuery | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  // Using Next.js API routes (no external URL needed)

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (token) {
      verifyToken(token)
    } else {
      setLoading(false)
    }
  }, [])

  // Filter queries when search term or status filter changes
  useEffect(() => {
    let filtered = queries

    if (searchTerm) {
      filtered = filtered.filter(query =>
        query.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.service_interest.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(query => query.status === statusFilter)
    }

    setFilteredQueries(filtered)
  }, [queries, searchTerm, statusFilter])

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch('/api/auth/verify', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setIsAuthenticated(true)
        fetchQueries()
      } else {
        localStorage.removeItem('admin_token')
        setLoading(false)
      }
    } catch (error) {
      console.error('Token verification failed:', error)
      localStorage.removeItem('admin_token')
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('admin_token', data.token)
        setIsAuthenticated(true)
        fetchQueries()
      } else {
        setLoginError(data.message || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      setLoginError('Network error. Please try again.')
    }
  }

  const fetchQueries = async () => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch('/api/contact/queries', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setQueries(data.data)
      } else {
        console.error('Failed to fetch queries')
      }
    } catch (error) {
      console.error('Error fetching queries:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/contact/queries/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      })

      if (response.ok) {
        setQueries(queries.map(query => 
          query.id === id 
            ? { ...query, status: newStatus as any, updated_at: new Date().toISOString() }
            : query
        ))
      }
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const handleDeleteClick = (query: ContactQuery) => {
    setQueryToDelete(query)
    setShowDeleteModal(true)
  }

  const confirmDelete = async () => {
    if (!queryToDelete) return

    try {
      const token = localStorage.getItem('admin_token')
      const response = await fetch(`/api/contact/queries/${queryToDelete.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setQueries(queries.filter(query => query.id !== queryToDelete.id))
        setShowDeleteModal(false)
        setQueryToDelete(null)
      }
    } catch (error) {
      console.error('Error deleting query:', error)
    }
  }

  const cancelDelete = () => {
    setShowDeleteModal(false)
    setQueryToDelete(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    setIsAuthenticated(false)
    setQueries([])
    setSelectedQuery(null)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <AlertCircle className="w-4 h-4 text-blue-500" />
      case 'in_progress':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'closed':
        return <XCircle className="w-4 h-4 text-gray-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'closed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-brand-red" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600">Enter admin credentials to access dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
                placeholder="Enter admin email"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="text-red-600 text-sm text-center">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-brand-red text-white py-2 px-4 rounded-md hover:bg-brand-red-dark transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
            <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/log-white.jpeg"
                    alt="Stay Connected Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={fetchQueries}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-gray-900">
                  {queries.filter(q => q.status === 'new').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {queries.filter(q => q.status === 'in_progress').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {queries.filter(q => q.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-gray-100 rounded-lg">
                <XCircle className="w-6 h-6 text-gray-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-900">{queries.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search queries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
                />
              </div>
            </div>
            <div className="sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Queries Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredQueries.map((query) => (
                  <tr key={query.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{query.name}</div>
                        <div className="text-sm text-gray-500">{query.email}</div>
                        {query.company && (
                          <div className="text-sm text-gray-500">{query.company}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{query.service_interest}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(query.status)}`}>
                        {getStatusIcon(query.status)}
                        <span className="ml-1 capitalize">{query.status.replace('_', ' ')}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(query.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => setSelectedQuery(query)}
                        className="text-brand-red hover:text-brand-red-dark"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <select
                        value={query.status}
                        onChange={(e) => updateStatus(query.id, e.target.value)}
                        className="text-xs border border-gray-300 rounded px-2 py-1 text-gray-900"
                      >
                        <option value="new">New</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="closed">Closed</option>
                      </select>
                      <button
                        onClick={() => handleDeleteClick(query)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredQueries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No queries found</p>
          </div>
        )}
      </div>

      {/* Query Detail Modal */}
      {selectedQuery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-gray-900">Contact Details</h2>
                <button
                  onClick={() => setSelectedQuery(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedQuery.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedQuery.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedQuery.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedQuery.company || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Service Interest</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedQuery.service_interest}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedQuery.status)}`}>
                      {getStatusIcon(selectedQuery.status)}
                      <span className="ml-1 capitalize">{selectedQuery.status.replace('_', ' ')}</span>
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{selectedQuery.message}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                  <div>
                    <strong>Created:</strong> {new Date(selectedQuery.created_at).toLocaleString()}
                  </div>
                  <div>
                    <strong>Updated:</strong> {new Date(selectedQuery.updated_at).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && queryToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Delete Query</h3>
                <p className="text-sm text-gray-500">This action cannot be undone</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-2">
                Are you sure you want to delete the query from <strong>{queryToDelete.name}</strong>?
              </p>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong>Service:</strong> {queryToDelete.service_interest}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {queryToDelete.email}
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={cancelDelete}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors duration-200"
              >
                Delete Query
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
