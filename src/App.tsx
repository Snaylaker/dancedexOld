export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold m-a ">Your App Name</h1>
      </header>
      <main className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl m-auto">
          <Card
            title="Sample Card"
            description="This is a sample description for the card component."
            videoUrl="leg-swipe.mp4"
          />
          <Card
            title="Sample Card"
            description="This is a sample description for the card component."
            videoUrl="unroll-back.mp4"
          />
          <Card
            title="Sample Card"
            description="This is a sample description for the card component."
            videoUrl="hand-fun.mp4"
          />
        </div>
      </main>
    </div>
  )
}

function Card({
  title,
  description,
  videoUrl,
}: {
  title: string
  description: string
  videoUrl: string
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg m-4 bg-white max-w-sm">
      <video className="w-full" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  )
}
