"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, BookOpen, Users, Calendar, Award, Lightbulb, Briefcase } from "lucide-react"

export default function HomePage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const Section = ({
    id,
    title,
    children,
    icon,
  }: {
    id: string
    title: string
    children: React.ReactNode
    icon?: React.ReactNode
  }) => {
    const isExpanded = expandedSections[id] ?? false

    return (
      <Card className="mb-6 border-l-4 border-l-purple-500">
        <CardHeader
          className="cursor-pointer flex flex-row items-center justify-between p-4"
          onClick={() => toggleSection(id)}
        >
          <div className="flex items-center gap-3">
            {icon}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </CardHeader>
        {isExpanded && <CardContent className="pt-0 px-4 pb-4">{children}</CardContent>}
      </Card>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            E-Club Manager Application
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my responses to the E-Cell IIT Madras application questionnaire for the position of Entrepreneurship
            Club Manager.
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="general">General Questionnaire</TabsTrigger>
            <TabsTrigger value="team">Team Specific Questionnaire</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Section
              id="entrepreneurship"
              title="Exploring Entrepreneurship at IIT Madras"
              icon={<BookOpen className="h-5 w-5 text-purple-500" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    What is Entrepreneurship? What is a Start-up? Mention one Startup that fascinates you and why.
                  </h3>
                  <p className="mb-2">
                    Entrepreneurship is the pursuit of identifying a real-world problem and developing an innovative,
                    scalable, and sustainable solution through a business model. It involves creativity, risk-taking,
                    and a vision to create value. A startup is a newly established venture working to solve a problem
                    through a disruptive approach or technology. It usually operates in an uncertain environment, aiming
                    for rapid growth and innovation.
                  </p>
                  <p>
                    A startup that fascinates me is Zoho, founded by Sridhar Vembu. Unlike typical high-burn startups,
                    Zoho grew profitably and independently, without relying on external investors. Sridhar chose to
                    build his company from a rural village in Tamil Nadu, empowering local talent and creating global
                    products in the SaaS space. His belief in self-reliance and building in Bharat for the world is both
                    inspiring and refreshing in the current startup landscape.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Write shortly on E-Cell in about 150 words regarding what you feel should be expected from such an
                    organization.
                  </h3>
                  <p>
                    The E-Cell at IIT Madras plays a pivotal role in shaping the entrepreneurial ecosystem within the
                    campus. It should be a platform that introduces students to the foundational aspects of
                    entrepreneurship—problem-solving, critical thinking, and innovation. By organizing engaging events,
                    speaker sessions, and competitions, it should offer students a space to learn, experiment, and grow.
                    From someone who is just curious to someone actively building a startup, E-Cell should provide
                    structured support through mentorship, resources, and exposure. Furthermore, it must also foster a
                    culture of collaboration and initiative, where students are encouraged to pursue bold ideas and take
                    ownership of their learning journey. E-Cell must serve as a launchpad that helps students transform
                    their ideas into tangible impact, both on campus and beyond.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Explain your understanding of the work of all 12 verticals in E-Cell briefly.
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Corporate Relations (CR):</span> Builds relationships with companies
                      and sponsors. They secure partnerships, handle funding, and act as the professional face of E-Cell
                      in the corporate world.
                    </li>
                    <li>
                      <span className="font-medium">Finance & Operations (FINOPS):</span> Manages all financial planning
                      and budgeting. They ensure resource optimization, track expenses, and collaborate with other
                      verticals to facilitate smooth event execution.
                    </li>
                    <li>
                      <span className="font-medium">Work Management & Operations (WMO):</span> Handles logistics, vendor
                      management, and overall coordination during events. They ensure timely execution and
                      infrastructure readiness.
                    </li>
                    <li>
                      <span className="font-medium">Graphic Design & Media (GDM):</span> Designs posters, videos, and
                      event branding. They shape E-Cell's visual identity and media presence, from theme reveals to
                      post-event reels.
                    </li>
                    <li>
                      <span className="font-medium">Development & Networking Analytics (DNA):</span> Focuses on
                      consulting, quality management, and ISO certification. They use analytics tools to track growth
                      and improve E-Cell's internal processes.
                    </li>
                    <li>
                      <span className="font-medium">Editorial & Research (ER):</span> Manages E-Cell's content via
                      blogs, podcasts, and written coverage. They maintain E-Cell's editorial standards and explore
                      startup journeys for inspiration.
                    </li>
                    <li>
                      <span className="font-medium">Student Relations & Outreach (SRO):</span> The offline engagement
                      team. They manage PR events, hostel-level competitions, and outreach to other colleges through
                      events like EDD and BidQuest.
                    </li>
                    <li>
                      <span className="font-medium">Media & Public Relations (MPR):</span> Curates social media
                      strategy, PR stunts, and brand-building campaigns. They ensure E-Cell is visible and engaging
                      online.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Mention any TWO entrepreneurship promoting bodies within IIT Madras aside from E-Cell and describe
                    their roles in 2-3 lines.
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Nirmaan:</span> It's mission is to empower and support young student
                      entrepreneurs to turn their innovative ideas into market-ready products. It is the powerhouse
                      behind over 90 active student-led startups, spanning across cutting-edge fields such as AI,
                      hardware, and sustainability. To date, 26 teams have graduated from Nirmaan, achieving a
                      cumulative valuation of over 1000 Cr and raising more than 108 Cr in venture funding.
                    </li>
                    <li>
                      <span className="font-medium">IITM Incubation Cell:</span> IITMIC is a government-recognized
                      incubator that supports startups with funding, mentorship, and resources. It focuses on nurturing
                      early-stage ventures and has a strong network of investors and industry experts.
                    </li>
                  </ol>
                </div>
              </div>
            </Section>

            <Section
              id="position-of-responsibility"
              title="Position of Responsibility"
              icon={<Briefcase className="h-5 w-5 text-purple-500" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Vertical I want to be a part of: Entrepreneurship-Club (E-Club)
                  </h3>

                  <h4 className="font-medium text-base mb-2">
                    What are the roles and responsibilities of this vertical?
                  </h4>
                  <p className="mb-4">
                    E-Club is all about helping students, especially freshies, take their first steps into
                    entrepreneurship. It handles events like E-Buddy, Ideastorm, CIC, and Conquer. The team works on
                    event planning, reaching out to speakers, assigning mentors, taking care of logistics, and making
                    sure participants actually enjoy and learn from the events. It also works closely with other
                    verticals for support and smooth execution.
                  </p>

                  <h4 className="font-medium text-base mb-2">
                    What do I think are the key learnings from being part of this vertical?
                  </h4>
                  <p className="mb-4">
                    We get to learn how to manage events from scratch. Things like planning timelines, handling
                    unexpected problems, talking to different people, and keeping participants engaged all help in
                    building confidence and communication skills. Plus, we also understand how to improve events based
                    on what went wrong last time. It teaches us how to work in a team and take ownership.
                  </p>

                  <h4 className="font-medium text-base mb-2">How does a Manager fulfill these responsibilities?</h4>
                  <p className="mb-4">
                    The Manager is the one who keeps things moving. Whether it's making sure mentors are active,
                    checking that PR is on time, or just handling unexpected changes, the Manager stays involved at
                    every step. They also help the team stay clear on who is doing what and make sure no part of the
                    event is left hanging. Basically, if something doesn't go as planned, the Manager figures out how to
                    fix it.
                  </p>

                  <h4 className="font-medium text-base mb-2">Any new initiative I'd like to take up?</h4>
                  <p>
                    Honestly, the current set of events in E-Club is already really well thought out. Initiatives like
                    E-Buddy and Ideastorm are solid, and E-Soc is a great addition this year. So instead of adding a new
                    event just for the sake of it, I would first make sure the existing events are done properly. That
                    means clear timelines, smooth coordination, and making sure participants get the value they signed
                    up for. Once these are strong, we can always build more on top of them.
                  </p>
                </div>
              </div>
            </Section>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Section
              id="eclub-fundamentals"
              title="Entrepreneurship Club Fundamentals"
              icon={<Lightbulb className="h-5 w-5 text-purple-500" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Explain the four baskets of the E-Cell and identify which one E-Club primarily focuses on. Is this
                    initiative limited to students?
                  </h3>
                  <p className="mb-2">
                    E-Cell's activities are mapped through four baskets that represent different stages in an
                    entrepreneurial journey:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>
                      <span className="font-medium">Basket 1:</span> Students with zero exposure to entrepreneurship —
                      they need awareness and inspiration.
                    </li>
                    <li>
                      <span className="font-medium">Basket 2:</span> Consists of those with early ideas or interest,
                      looking to explore further.
                    </li>
                    <li>
                      <span className="font-medium">Basket 3:</span> For people who have a structured idea and want help
                      with execution and validation.
                    </li>
                    <li>
                      <span className="font-medium">Basket 4:</span> Focuses on early-stage startups seeking to scale,
                      raise funds, or build their product.
                    </li>
                  </ul>
                  <p>
                    E-Club mostly focuses on <span className="font-medium">Basket 1 and Basket 2</span>, helping
                    beginners and ideators through events like E-Buddy and Ideastorm. While the primary audience is
                    students, there's definitely scope to involve alumni and even faculty-led innovations, especially
                    through panels and mentoring sessions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Who are the current stakeholders of E-Club, and is there a potential to introduce additional
                    stakeholders?
                  </h3>
                  <p>
                    Currently, the stakeholders of E-Club include students (mainly 1st and 2nd years), E-Cell mentors,
                    alumni speakers, and student startups that engage with yearlong events. There's good potential to
                    add more value by bringing in <span className="font-medium">external stakeholders</span> like
                    early-stage investors, incubator partners (like Nirmaan and Research Park), and experienced alumni
                    founders.
                  </p>
                  <p className="mt-2">
                    We can reach out to these through the existing E-Cell alumni database, structured speaker outreach
                    via LinkedIn, and by integrating E-Club finalists with ecosystem opportunities like Nirmaan or
                    Startup Meetups.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    List and briefly elaborate on the yearlong events and initiatives organized by E-Club. Additionally,
                    conduct a SWOT analysis of these initiatives.
                  </h3>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">E-Buddy</h4>
                    <p className="mb-2">
                      A mentorship-based program for freshers that includes icebreakers, entrepreneurial games, and
                      team-based competitions. It helps break the fear barrier and introduces them to startup thinking
                      in a relaxed format.
                    </p>
                    <p className="font-medium mb-1">SWOT:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Strength:</span> High enthusiasm among freshers, good format
                        variety
                      </li>
                      <li>
                        <span className="font-medium">Weakness:</span> Inconsistent mentor response from previous
                        mentors
                      </li>
                      <li>
                        <span className="font-medium">Opportunity:</span> Structured mentor onboarding, more hostel-wide
                        collabs
                      </li>
                      <li>
                        <span className="font-medium">Threat:</span> Drop in engagement if mentors remain inactive
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">Ideastorm</h4>
                    <p className="mb-2">
                      A guided program that helps students take a raw idea and validate it through mentorship and
                      structured sessions. This year, speaker quality was great but session alignment was an issue.
                      Engagement dropped slightly toward the end, but it still performed better than previous years.
                    </p>
                    <p className="font-medium mb-1">SWOT:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Strength:</span> Good speaker lineup, structured flow
                      </li>
                      <li>
                        <span className="font-medium">Weakness:</span> Some speakers didn't stick to defined roles
                      </li>
                      <li>
                        <span className="font-medium">Opportunity:</span> Pre-session briefings, alumni mentors for
                        finals
                      </li>
                      <li>
                        <span className="font-medium">Threat:</span> Reduced participant retention in later weeks
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">Campus Innovation Challenge (CIC)</h4>
                    <p className="mb-2">
                      Encourages students to solve real institute-level problems using entrepreneurial thinking. The
                      concept is strong, but execution lagged this year due to poor initial communication. It had to be
                      extended and wrapped up during E-Summit.
                    </p>
                    <p className="font-medium mb-1">SWOT:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Strength:</span> Direct relevance to insti life, practical mindset
                        building
                      </li>
                      <li>
                        <span className="font-medium">Weakness:</span> Poor communication of goals and timeline
                      </li>
                      <li>
                        <span className="font-medium">Opportunity:</span> Pre plan the event, better timeline planning
                      </li>
                      <li>
                        <span className="font-medium">Threat:</span> If delayed, good ideas go unimplemented
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">GTIF (Getting To Know Insti Founders)</h4>
                    <p className="mb-2">
                      These are short talks or Q&A sessions with IITM alumni founders. It builds relatability and shows
                      students that starting up is not as distant as it seems.
                    </p>
                    <p className="font-medium mb-1">SWOT:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Strength:</span> Highly relatable, low-cost, high impact
                      </li>
                      <li>
                        <span className="font-medium">Weakness:</span> Limited PR reach, often seen as "one-time"
                      </li>
                      <li>
                        <span className="font-medium">Opportunity:</span> Turn it into a series + podcast format
                      </li>
                      <li>
                        <span className="font-medium">Threat:</span> Low turnout if not marketed with a hook
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">Conquer</h4>
                    <p className="mb-2">
                      A case-study based competition to boost critical thinking and structured problem-solving. Usually
                      attracts seniors and those with analytical bent.
                    </p>
                    <p className="font-medium mb-1">SWOT:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-medium">Strength:</span> High value for resume and experience
                      </li>
                      <li>
                        <span className="font-medium">Weakness:</span> Limited freshie involvement
                      </li>
                      <li>
                        <span className="font-medium">Opportunity:</span> Collaborate with Strat Club, turn it into
                        multi-round event
                      </li>
                      <li>
                        <span className="font-medium">Threat:</span> Less visibility compared to flashy events
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    If given the opportunity to redesign the event lineup, what new initiative or event would you
                    propose to enhance our current offerings?
                  </h3>
                  <p>
                    Rather than adding a new event, I would focus on improving the structure and coordination of our
                    existing lineup to make each initiative more effective.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>
                      <span className="font-medium">E-Buddy</span> can be restructured with better mentor involvement.
                      Before assigning mentors, we can do a short onboarding or commitment check to ensure they'll stay
                      active. Also, running shorter, more focused weekly sessions instead of loosely structured ones can
                      help with consistency.
                    </li>
                    <li>
                      <span className="font-medium">Ideastorm</span> - Since speakers come voluntarily, we can't control
                      their content too tightly. So instead of strict roles, we can add a student moderator to each
                      session so he/she can help steer the discussion and make sure core points are still covered. Keeps
                      it flexible but focused.
                    </li>
                    <li>
                      <span className="font-medium">CIC</span> needs a clearer kickoff. Managers should be given a
                      proper timeline and expectations from the start. This avoids the confusion that happened last time
                      and allows more time for implementing solutions rather than just pitching them.
                    </li>
                    <li>
                      <span className="font-medium">Youth Conclave</span> events like Webstart and Ethletics need to be
                      finalized earlier. Delayed confirmations affect PR, planning, and even snacks and logistics. If
                      these are locked at least a week prior to E-Summit, the execution becomes way smoother.
                    </li>
                    <li>
                      <span className="font-medium">GTIF</span> could be turned into a recurring series across the
                      semester instead of just a one-off. This helps keep alumni engagement consistent and builds more
                      familiarity with the startup journey.
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="inspirit" title="Inspirit" icon={<Award className="h-5 w-5 text-purple-500" />}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    What is the purpose of Inspirit, and what profiles of speakers do we typically reach out to? Are
                    there any untapped speaker profiles that could be relevant?
                  </h3>
                  <p>
                    Inspirit is about bringing the stories behind startups — not just their success, but the thought
                    process, setbacks, and mindset. Usually, we reach out to startup founders, VCs, and creators with
                    public recognition. But there's untapped value in featuring{" "}
                    <span className="font-medium">non-traditional founders</span> too — like regional entrepreneurs,
                    community-focused builders, solo creators, and even product managers at scaling startups. These
                    profiles bring authenticity and hands-on relevance, especially for students in Baskets 2 and 3.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How can we improve outreach methods to potential speakers and tackle speaker hesitancy?
                  </h3>
                  <p>
                    We can build a proper outreach deck and speaker guide explaining what Inspirit is and why it's
                    unique. Keeping the mail warm and personal helps — for example, referencing their recent tweet,
                    podcast, or product launch. To tackle hesitancy, we can offer behind-the-scenes content support
                    (like photos and reels), short interactions with select students, and connections to the IITM
                    startup community.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="yearlong-events"
              title="Yearlong Events"
              icon={<Calendar className="h-5 w-5 text-purple-500" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    E-Buddy is the flagship event of E-Club that focuses exclusively on providing first-year students
                    with mentorship regarding entrepreneurship. Revamp the structure.
                  </h3>
                  <p>
                    The event can be revamped by introducing a more gamified structure with mini-competitions like pitch
                    roulette, meme pitches, or ad design sprints. More hands-on peer mentorship from 2nd-year students
                    and consistent rewards can improve participation. A buddy leaderboard or hostel-wise competition
                    might add excitement. Consistency is key, so mentors need to be briefed well beforehand with a fixed
                    calendar.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Map out the journey of Ideastorm and increase engagement from 2nd/3rd years.
                  </h3>
                  <p className="font-medium mb-1">Timeline:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Week 1 – Orientation + GTIF + Idea Funnel workshop</li>
                    <li>Week 2 – Problem validation + mentor mapping</li>
                    <li>Week 3 – Market research session + progress checkpoint</li>
                    <li>Week 4 – Final pitch + showcase at a public venue like CRC or Himalaya</li>
                  </ul>

                  <p>
                    To attract 2nd/3rd years, highlight benefits like early access to Nirmaan, networking with alumni,
                    or mentorship certificates. Cross-post updates on dept groups and reach out via GSec PR networks.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="e-soc" title="E-Soc" icon={<Users className="h-5 w-5 text-purple-500" />}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How can we maximize participation of both freshie and senior hostels in E-Soc? What PR events or
                    stunts can be used?
                  </h3>
                  <p>
                    Start with hostel-wise challenges like "Startup Meme Battles", "Shark Tank in 5 Slides", or an open
                    mic pitch night. Keep the events short and fun with food coupons or hostel points as incentives.
                    Appoint hostel reps who handle quick PR and reminders. Public shoutouts during E-Summit or E-Awards
                    can increase FOMO. Even a mini startup-themed treasure hunt within hostels can generate buzz.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Vision and mission of CIC vs. TechSoc's BuildSchool:</h3>
                  <p>
                    CIC is aimed at developing problem-solving through entrepreneurial thinking for real insti-level
                    issues. It's more about how to think like a founder. BuildSchool is about learning technical skills
                    and building prototypes or tools. CIC focuses on creating startup-style solutions to pain points.
                    BuildSchool focuses on technical depth and execution. Both are valuable, but CIC leans more toward
                    innovation and application in a business context.
                  </p>
                </div>
              </div>
            </Section>

            <Section id="youth-conclave" title="Youth Conclave" icon={<Users className="h-5 w-5 text-purple-500" />}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Youth Conclave Events Classification & Engagement Plan for Summit Streets
                  </h3>

                  <h4 className="font-medium text-base mb-2">1. Event Lineup (high-level)</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      <span className="font-medium">Pre-booked:</span> Boardroom case study, E-Awards ceremony, 3-hour
                      Design Blitz
                    </li>
                    <li>
                      <span className="font-medium">Walk-ins:</span> "Stocks Are High" mini-game, live Auction,
                      BizBazaar stalls
                    </li>
                    <li>
                      <span className="font-medium">Talks:</span> 1-hour Content Creation Masterclass, 1-hour Fireside
                      Chats
                    </li>
                  </ul>

                  <h4 className="font-medium text-base mb-2">2. Engagement Hooks</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      <span className="font-medium">Quick QR Hunt:</span> 5 stations, simple quiz or photo prompt,
                      instantly shows top 3 on screen
                    </li>
                    <li>
                      <span className="font-medium">1-Line Pitch Pop-Ups:</span> every hour; volunteers give instant
                      "star" sticker
                    </li>
                    <li>
                      <span className="font-medium">Social Blitz:</span> one daily reel + a single Instagram poll
                      ("Which challenge next?")
                    </li>
                  </ul>

                  <h4 className="font-medium text-base mb-2">3. Key Logistics</h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      <span className="font-medium">Zones:</span> 3 distinct areas (workshop, games, stalls/talks) with
                      clear signage
                    </li>
                    <li>
                      <span className="font-medium">Volunteers:</span> 1 per 15 attendees, plus 2 floaters for the
                      pop-ups
                    </li>
                    <li>
                      <span className="font-medium">Schedule:</span> stagger start times by 15 minutes, reminders via
                      WhatsApp blast
                    </li>
                  </ul>

                  <h4 className="font-medium text-base mb-2">4. Simple Rewards</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Collect 3 stars → branded notebook</li>
                    <li>Top QR team → front-row seats at E-Awards</li>
                  </ul>
                </div>
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
