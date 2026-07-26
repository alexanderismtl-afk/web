'use client'

export default function RightPanel() {
  const trending = [
    { topic: 'Anxiety Management', posts: 2341 },
    { topic: 'Mindfulness Practice', posts: 1890 },
    { topic: 'Sleep & Recovery', posts: 1654 },
    { topic: 'Grief Support', posts: 1203 },
  ]

  return (
    <aside className="hidden xl:block w-80 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto">
      <div className="bg-white rounded-lg shadow-sm p-4 m-4">
        <h3 className="font-bold text-xl mb-4">Trending Topics</h3>
        <div className="space-y-3">
          {trending.map((item) => (
            <div
              key={item.topic}
              className="p-3 hover:bg-secondary rounded-lg transition cursor-pointer"
            >
              <p className="font-bold text-gray-900">{item.topic}</p>
              <p className="text-xs text-gray-500">{item.posts.toLocaleString()} discussions</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 m-4">
        <h3 className="font-bold text-xl mb-4">About TherapyHub</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          A supportive community for structured therapy workbooks, mental health resources, and personal growth. Share, learn, and grow together.
        </p>
        <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg font-bold hover:bg-primary-dark transition">
          Learn More
        </button>
      </div>
    </aside>
  )
}
