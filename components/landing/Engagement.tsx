import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MaxWidthWrapper } from "../ui/max-width-wrapper";
import WordRotate from "../ui/word-rotate";

const cards = [
  {
    title: "Post Type Analyzer",

    steps: [
      "Select a Post Type: Choose from options like Reels, Carousels, or Static Images.",
      "View Insights: Get detailed engagement metrics like likes, shares, and comments.",
      "Ideal Timing: Receive recommendations for the best time to post.",
    ],
  },
  {
    title: "Engagement growth chat bot",

    steps: [
      "Ask for Tips: Chat with the bot to get actionable strategies for boosting engagement.",
      "Get Custom Suggestions: Receive tailored advice based on your content type and goals.",
      "Plan and Post: Apply tips like ideal posting schedules, trending hashtags, and more.",
    ],
  },
];

export default function Engagement() {
  return (
    <MaxWidthWrapper className="px-6 lg:px-0">
      <section className="py-12 lg:py-24">
        <div className="space-y-2.5">
          <WordRotate
            duration={1500}
            words={["Learn", "Apply"]}
            className="text-red-600 font-secondary text-start lg:text-start text-4xl font-bold"
          />
          <h1 className="text-base text-start lg:text-start text-secondary">
            Boost Engagement.
          </h1>
          <h4 className="text-base text-muted-foreground text-start lg:text-start">
            Explore powerful tools to analyze post performance and get
            personalized tips for growing your Instagram audience.
          </h4>
          <div className="flex flex-col lg:flex-row gap-2 justify-center w-10/12 mx-auto pt-5">
            {cards.map((card, index) => (
              <Card className="bg-black border-red-600" key={index}>
                <CardHeader className="space-y-2">
                  <CardTitle className="text-secondary underline underline-offset-4">
                    <h2>{card.title}</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="text-sm space-y-2 list-decimal text-white">
                    {card.steps.map((step, index) => (
                      <h4 key={index} className="flex items-start">
                        <span className="text-red-600 inline-block mr-2">
                          <Check />
                        </span>
                        {step}
                      </h4>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
