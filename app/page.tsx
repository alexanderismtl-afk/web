import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import RightPanel from '@/components/RightPanel'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-2xl mx-auto w-full">
          <Feed />
        </main>
        <RightPanel />
      </div>
    </div>
  )
}
