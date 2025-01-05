export default function Engagement() {
  return (
    <section className="text-white flex flex-col my-4">
      <h1 className="text-2xl text-center bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] inline-block text-transparent bg-clip-text">
        Learn. Apply.
      </h1>
      <h1 className="text-2xl text-center">Boost Engagement.</h1>
      <p className="text-lg text-gray-400 text-center">
        Explore powerful tools to analyze post performance and get personalized
        tips for growing your Instagram audience.
      </p>
      <div className="flex items-center justify-around">
        <div className="border-2 border-red-500 p-6 rounded-xl w-1/3">
          <h2 className="text-xl font-bold">Post Type Analyzer</h2>
          <p className="text-gray-400">How to Use:</p>
          <ol className="text-sm list-decimal text-gray-400">
            <li>
              Select a Post Type: Choose from options like Reels, Carousels, or
              Static Images.
            </li>
            <li>
              View Insights: Get detailed engagement metrics like likes, shares,
              and comments.
            </li>
            <li>
              Ideal Timing: Receive recommendations for the best time to post.
            </li>
          </ol>
        </div>
        <div className="border-2 border-red-500 p-6 rounded-xl w-1/3">
          <h2 className="text-xl font-bold">Engagement growth chat bot</h2>
          <p className="text-gray-400">How to Use:</p>
          <ol className="text-sm list-decimal text-gray-400">
            <li>
              Ask for Tips: Chat with the bot to get actionable strategies for
              boosting engagement.
            </li>
            <li>
              Get Custom Suggestions: Receive tailored advice based on your
              content type and goals.
            </li>
            <li>
              Plan and Post: Apply tips like ideal posting schedules, trending
              hashtags, and more.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
