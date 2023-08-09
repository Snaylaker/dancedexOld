import "./App.css"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-2xl">Movie Landing Page</h1>
      </header>
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Popular Movies</h2>
        <div className="flex flex-wrap gap-4">
          <DanceCard
            title="title1"
            description="description"
            link="youtube-video-gif.gif"
          />
          <DanceCard
            title="title1"
            description="description"
            link="youtube-video-gif.gif"
          />
          <DanceCard
            title="title1"
            description="description"
            link="youtube-video-gif.gif"
          />
          {/* Add more movie cards here */}
        </div>
      </div>
    </div>
  )
}

const DanceCard = ({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) => {
  return (
    <div className="bg-white rounded shadow">
      <div>
        <iframe src={link} width={"100%"} height={"100%"} ></iframe>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default App
