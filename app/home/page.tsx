"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Users,
  Calendar,
  Award,
  Lightbulb,
  Briefcase,
} from "lucide-react";

export default function HomePage() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const Section = ({
    id,
    title,
    children,
    icon,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
  }) => {
    const isExpanded = expandedSections[id] ?? false;

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
        {isExpanded && (
          <CardContent className="pt-0 px-4 pb-4">{children}</CardContent>
        )}
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            E-Club Manager Application
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my responses to the E-Cell IIT Madras application
            questionnaire for the position of Entrepreneurship Club Manager.
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
                    What is Entrepreneurship? What is a Start-up? Mention one
                    Startup that fascinates you and why.
                  </h3>
                  <p className="mb-2">
                    Entrepreneurship is the pursuit of identifying a real-world
                    problem and developing an innovative, scalable, and
                    sustainable solution through a business model. It involves
                    creativity, risk-taking, and a vision to create value. A
                    startup is a newly established venture working to solve a
                    problem through a disruptive approach or technology. It
                    usually operates in an uncertain environment, aiming for
                    rapid growth and innovation.
                  </p>
                  <p>
                    A startup that fascinates me is Zoho, founded by Sridhar
                    Vembu. Unlike typical high-burn startups, Zoho grew
                    profitably and independently, without relying on external
                    investors. Sridhar chose to build his company from a rural
                    village in Tamil Nadu, empowering local talent and creating
                    global products in the SaaS space. His belief in
                    self-reliance and building in Bharat for the world is both
                    inspiring and refreshing in the current startup landscape.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Write shortly on E-Cell in about 150 words regarding what
                    you feel should be expected from such an organization.
                  </h3>
                  <p>
                    The E-Cell at IIT Madras plays a pivotal role in shaping the
                    entrepreneurial ecosystem within the campus. It should be a
                    platform that introduces students to the foundational
                    aspects of entrepreneurship—problem-solving, critical
                    thinking, and innovation. By organizing engaging events,
                    speaker sessions, and competitions, it should offer students
                    a space to learn, experiment, and grow. From someone who is
                    just curious to someone actively building a startup, E-Cell
                    should provide structured support through mentorship,
                    resources, and exposure. Furthermore, it must also foster a
                    culture of collaboration and initiative, where students are
                    encouraged to pursue bold ideas and take ownership of their
                    learning journey. E-Cell must serve as a launchpad that
                    helps students transform their ideas into tangible impact,
                    both on campus and beyond.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Explain your understanding of the work of all 12 verticals
                    in E-Cell briefly.
                  </h3>
                  <p>
                    There are total 12 verticals out of which 8 are supporting
                    and 4 are PD
                  </p>

                  <h4 className="font-medium text-base mb-2">
                    🔹 Supporting Verticals (8)
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <span className="font-medium">
                        Corporate Relations (CR)
                      </span>
                      Handles sponsor connects, funding partnerships, and
                      corporate outreach for E-Summit and yearlong events.
                    </li>
                    <li>
                      <span className="font-medium">
                        Finance & Operations (FinOps)
                      </span>
                      Manages all finances — from budgeting and reimbursements
                      to smooth fund allocation for every event.
                    </li>
                    <li>
                      <span className="font-medium">
                        Web & Mobile Operations (WMO)
                      </span>
                      Takes care of E-Cell's websites, web apps, forms, and
                      technical backends used in events and outreach.
                    </li>
                    <li>
                      <span className="font-medium">
                        Graphic Design & Media (GDM)
                      </span>
                      Designs all creatives including posters, reels, decks, and
                      merchandise. Maintains E-Cell's visual identity.
                    </li>
                    <li>
                      <span className="font-medium">
                        Development & Networking Analytics (DNA)
                      </span>
                      Manages inter-vertical coordination, tracking tasks,
                      internal analytics, and ensuring smooth collaboration
                      across the team.
                    </li>
                    <li>
                      <span className="font-medium">
                        Editorial & Research (ER)
                      </span>
                      Handles content like blogs, podcasts, newsletters, and
                      written coverage of events and founder journeys.
                    </li>
                    <li>
                      <span className="font-medium">
                        Student Relations & Outreach (SRO)
                      </span>
                      The offline engagement team. They manage PR events,
                      outreaches to very different schools and colleges it is
                      most important vertical for eclub as we also mostly cater
                      students
                    </li>
                    <li>
                      <span className="font-medium">
                        Media & Public Relations (MPR)
                      </span>
                      Runs E-Cell's social media presence and PR stunts. Crafts
                      captions, reels, and announcement strategies.
                    </li>
                  </ol>

                  <h4 className="font-medium text-base mt-4 mb-2">
                    🔹 PD Verticals (4)
                  </h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <span className="font-medium">
                        E-Club (Entrepreneurship-Club)
                      </span>
                      Focuses on Basket 1 & 2. Conducts beginner-friendly events
                      like E-Buddy, Ideastorm, and CIC to introduce
                      entrepreneurship.
                    </li>
                    <li>
                      <span className="font-medium">
                        EN (Events & Networking)
                      </span>
                      Caters to Basket 2 & 3. Hosts major speaker sessions,
                      networking meetups, and flagship events that offer deeper
                      entrepreneurial exposure.
                    </li>
                    <li>
                      <span className="font-medium">
                        GSI (Global Startup Immersion)
                      </span>
                      Caters to Basket 3. Brings international exposure through
                      startup tours, global founder sessions, and scaling-based
                      discussions.
                    </li>
                    <li>
                      <span className="font-medium">SS (Startup Services)</span>
                      Caters to Basket 4. Supports early-stage startups through
                      structured offerings like CDP, SSP, internships, and
                      consult-based services
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Mention any TWO entrepreneurship promoting bodies within IIT
                    Madras aside from E-Cell and describe their roles in 2-3
                    lines.
                  </h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Nirmaan:</span> It's mission
                      is to empower and support young student entrepreneurs to
                      turn their innovative ideas into market-ready products. It
                      is the powerhouse behind over 90 active student-led
                      startups, spanning across cutting-edge fields such as AI,
                      hardware, and sustainability. To date, 26 teams have
                      graduated from Nirmaan, achieving a cumulative valuation
                      of over 1000 Cr and raising more than 108 Cr in venture
                      funding.
                    </li>
                    <li>
                      <span className="font-medium">IITM Incubation Cell:</span>{" "}
                      IITMIC is a government-recognized incubator that supports
                      startups with funding, mentorship, and resources. It
                      focuses on nurturing early-stage ventures and has a strong
                      network of investors and industry experts.
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
                    Vertical I want to be a part of: Entrepreneurship-Club
                    (E-Club)
                  </h3>

                  <h4 className="font-medium text-base mb-2">
                    What are the roles and responsibilities of this vertical?
                  </h4>
                  <p className="mb-4">
                    E-Club is all about helping students, especially freshies,
                    take their first steps into entrepreneurship. It handles
                    events like E-Buddy, Ideastorm, CIC, and Conquer. The team
                    works on event planning, reaching out to speakers, assigning
                    mentors, taking care of logistics, and making sure
                    participants actually enjoy and learn from the events. It
                    also works closely with other verticals for support and
                    smooth execution.
                  </p>

                  <h4 className="font-medium text-base mb-2">
                    What do I think are the key learnings from being part of
                    this vertical?
                  </h4>
                  <p className="mb-4">
                    We get to learn how to manage events from scratch. Things
                    like planning timelines, handling unexpected problems,
                    talking to different people, and keeping participants
                    engaged all help in building confidence and communication
                    skills. Plus, we also understand how to improve events based
                    on what went wrong last time. It teaches us how to work in a
                    team and take ownership.
                  </p>

                  <h4 className="font-medium text-base mb-2">
                    How does a Manager fulfill these responsibilities?
                  </h4>
                  <p className="mb-4">
                    The Manager is the one who keeps things moving. Whether it's
                    making sure mentors are active, checking that PR is on time,
                    or just handling unexpected changes, the Manager stays
                    involved at every step. They also help the team stay clear
                    on who is doing what and make sure no part of the event is
                    left hanging. Basically, if something doesn't go as planned,
                    the Manager figures out how to fix it.
                  </p>

                  <h4 className="font-medium text-base mb-2">
                    Any new initiative I'd like to take up?
                  </h4>
                  <p>
                    Honestly, the current set of events in E-Club is already
                    really well thought out. Initiatives like E-Buddy and
                    Ideastorm are solid, and E-Soc is a great addition this
                    year. So instead of adding a new event just for the sake of
                    it, I would first make sure the existing events are done
                    properly. That means clear timelines, smooth coordination,
                    and making sure participants get the value they signed up
                    for. Once these are strong, we can always build more on top
                    of them.
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
                    Explain the four baskets of the E-Cell and identify which
                    one E-Club primarily focuses on. Is this initiative limited
                    to students?
                  </h3>
                  <h4 className="font-medium text-base mb-2">
                    🔹 1. Four Baskets of E-Cell and E-Club's Focus
                  </h4>
                  <p className="mb-2">
                    E-Cell follows a tiered system of engagement called
                    "Baskets" that define the student's current involvement in
                    entrepreneurship:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>
                      <span className="font-medium">Basket 1:</span> Students
                      with no prior exposure, looking for inspiration and basic
                      awareness.
                    </li>
                    <li>
                      <span className="font-medium">Basket 2:</span> Those with
                      rough ideas or early interest who want to validate and
                      structure them.
                    </li>
                    <li>
                      <span className="font-medium">Basket 3:</span> Students
                      with validated ideas who are now seeking guidance on
                      execution.
                    </li>
                    <li>
                      <span className="font-medium">Basket 4:</span> Early-stage
                      founders/startups ready for scaling and funding.
                    </li>
                  </ul>
                  <p>
                    E-Club primarily focuses on{" "}
                    <span className="font-medium">Basket 1 and 2</span>, by
                    creating beginner-friendly spaces like E-Buddy, Ideastorm,
                    and casual hostel-based events to make entrepreneurship
                    accessible and non-intimidating.
                  </p>
                  <p className="mt-2">
                    This initiative isn't limited to students — alumni,
                    early-stage founders, mentors, and even professors can be
                    brought in as guest mentors or speakers to guide teams.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Who are the current stakeholders of E-Club, and is there a
                    potential to introduce additional stakeholders?
                  </h3>
                  <h4 className="font-medium text-base mb-2">
                    🔹 2. Stakeholders of E-Club and Potential Additions
                  </h4>
                  <p className="font-medium mb-1">Current Stakeholders:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>
                      First-year and second-year students (core audience for
                      events)
                    </li>
                    <li>Managers and AMs from E-Cell</li>
                    <li>Founders and mentors invited as speakers/judges</li>
                    <li>
                      Institute-level participants from other clubs and
                      departments
                    </li>
                  </ul>
                  <p className="font-medium mb-1">
                    Potential Additional Stakeholders:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>
                      Alumni entrepreneurs: Bring experience, can be part of
                      GTIF or Ideastorm finale judging
                    </li>
                    <li>
                      Research scholars or tech project heads: Useful for CIC or
                      product-centric events
                    </li>
                    <li>
                      External student clubs (like S4DS, TechSoc): For
                      collaborative events like Conquer or Design Blitz
                    </li>
                    <li>
                      IITM Incubation Cell or Nirmaan: As follow-up paths
                      post-events
                    </li>
                  </ul>
                  <p>
                    To integrate them, we can host curated collab sessions or
                    open calls, and assign dedicated outreach teams.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    List and briefly elaborate on the yearlong events and
                    initiatives organized by E-Club. Additionally, conduct a
                    SWOT analysis of these initiatives.
                  </h3>
                  <h4 className="font-medium text-base mb-2">
                    🔹 3. Yearlong Events & Initiatives
                  </h4>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">🟠 Ideastorm</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        A month-long idea accelerator that helps participants
                        validate and pitch their early-stage startup ideas.
                      </li>
                      <li>
                        Structure includes 3 main sessions, 2 GTIFs (talks from
                        IITM founders), and an Idea Validation Meetup (IVM).
                      </li>
                      <li>
                        Each session focuses on a different phase: problem
                        identification, market research, and execution strategy.
                      </li>
                      <li>
                        Participants receive mentor support from real founders
                        or investors.
                      </li>
                      <li>
                        Finalists are encouraged to continue to Nirmaan or
                        incubation opportunities.
                      </li>
                      <li>
                        2nd and 3rd year students often step in as team leads or
                        mentor figures here.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">🟡 E-Buddy</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Flagship beginner event of E-Club, exclusively for
                        freshers.
                      </li>
                      <li>
                        Aims to make them comfortable with entrepreneurial
                        concepts through gamified formats.
                      </li>
                      <li>
                        Structure:
                        <ul className="list-disc pl-5 space-y-1 mt-1">
                          <li>Orientation</li>
                          <li>Session 1 (Introduction to ideas & teams)</li>
                          <li>Startup Walk (Research Park visit)</li>
                          <li>
                            Session 2 (Fun activities like Startup Pictionary or
                            ad-mad)
                          </li>
                          <li>E-Auction (team bidding & improv pitch)</li>
                          <li>
                            Session 3 (final interaction or light pitching)
                          </li>
                        </ul>
                      </li>
                      <li>
                        Helps build community among freshies and introduces key
                        concepts through play.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">
                      🔵 Campus Innovation Challenge (CIC)
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Problem-solving event where students address real
                        IITM-specific issues using an entrepreneurial approach.
                      </li>
                      <li>
                        Begins with a Problem Identification phase → ideation →
                        mentorship → final pitching.
                      </li>
                      <li>
                        Encourages interdisciplinary teamwork and solution
                        feasibility.
                      </li>
                      <li>
                        Ideal platform for teams looking to solve relevant pain
                        points within the campus ecosystem.
                      </li>
                      <li>Conducted over a month and ends during E-Summit.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">🟣 Conquer</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Case-study competition held during E-Weekender.</li>
                      <li>
                        Participants are presented with a startup/business
                        problem and must design a solution with structured
                        reasoning.
                      </li>
                      <li>
                        It's a niche event that caters to students inclined
                        towards consulting, management, or startup ops.
                      </li>
                      <li>Last edition was sponsored by LiquidMind.ai.</li>
                      <li>
                        Builds analytical and pitch skills, often judged by
                        external founders or VCs.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">
                      🟤 Theme Launch
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Kickstarts the E-Cell year with energy, introducing
                        theme, vision, and merchandise.
                      </li>
                      <li>
                        Includes fun activities like Fashion Walk (run by EC +
                        SRO), BizBazaar stalls, and interactive game zones.
                      </li>
                      <li>
                        Encourages crowd participation and gives visibility to
                        all verticals.
                      </li>
                      <li>
                        Also includes informal startup-themed stalls run by
                        managers, contributing to funds and engagement.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-base mb-1">
                      ⚪ Independence Day Event
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        A special occasion where E-Club contributes via creative
                        engagement.
                      </li>
                      <li>
                        Includes game stalls, short entrepreneurial games, and
                        open crowd interactions.
                      </li>
                      <li>
                        Shot the E-Insight video — casual interviews of insti
                        students to build PR.
                      </li>
                      <li>A GTIF session was also organized that day.</li>
                      <li>
                        Seen as a PR-heavy day, used to test how well E-Club can
                        execute casual outdoor events.
                      </li>
                    </ul>
                  </div>
                  <div className="text-center mt-6">
                    <a
                      href="https://1drv.ms/x/c/6e014affd6f1c029/ET53RgFdOuRHprSxa3PRFnABSlEBBrnyBcIgHodeFYGyIg?e=L27OGE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
                    >
                      🚀 Click me to see SWOT ANALYSIS
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    If given the opportunity to redesign the event lineup, what
                    new initiative or event would you propose to enhance our
                    current offerings?
                  </h3>
                  <h4 className="font-medium text-base mb-2">
                    🔹 4. Redesign the Event Lineup – Updated Strategy
                  </h4>
                  <p>
                    Instead of proposing new events, I'd focus on optimizing the
                    current flow:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>
                      <span className="font-medium">E-Buddy:</span> Add a
                      hostel-wise leaderboard and gamification badges to retain
                      freshers across all sessions.
                    </li>
                    <li>
                      <span className="font-medium">Ideastorm:</span> Shift
                      session 1 earlier in the semester to better align with
                      Nirmaan; add structured pre-read material for teams.
                    </li>
                    <li>
                      <span className="font-medium">CIC:</span> Release problem
                      statements with optional categories to help teams ideate
                      faster. Create a post-CIC demo day to encourage actual
                      implementation.
                    </li>
                    <li>
                      <span className="font-medium">GTIF:</span> Make it a
                      monthly mini-series (video/podcast style), not just a part
                      of Ideastorm.
                    </li>
                    <li>
                      <span className="font-medium">Theme Launch:</span> Assign
                      crowd duties to AMs beforehand. Add a teaser campaign (QR
                      puzzles, IG countdowns) to improve visibility.
                    </li>
                    <li>
                      <span className="font-medium">Independence Day:</span> Use
                      the platform to launch new initiatives like E-Soc or
                      announce upcoming E-Weekender events in a creative way.
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section
              id="inspirit"
              title="Inspirit"
              icon={<Award className="h-5 w-5 text-purple-500" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    What is the purpose of Inspirit, and what profiles of
                    speakers do we typically reach out to? Are there any
                    untapped speaker profiles that could be relevant?
                  </h3>
                  <h4 className="font-medium text-base mb-2">
                    🔹 Inspirit – Purpose and Speaker Profiles
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      Inspirit is E-Club's flagship speaker vertical that brings
                      founders, creators, and VCs to campus.
                    </li>
                    <li>
                      The goal is to make students hear real stories behind
                      startups — not just success but failures, pivots, and
                      decisions.
                    </li>
                    <li>
                      Sessions are informal, interactive, and often end with
                      direct Q&A from the crowd.
                    </li>
                    <li>
                      We usually invite successful founders, funders, or viral
                      creators with wide visibility.
                    </li>
                    <li>
                      But there's a huge opportunity in inviting non-mainstream
                      speakers:
                      <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>Solo builders who've scaled without a team.</li>
                        <li>
                          Regional entrepreneurs building for Bharat markets.
                        </li>
                        <li>
                          Bootstrapped founders and non-profit innovators.
                        </li>
                        <li>
                          Product managers from high-growth companies like Zoho
                          or Razorpay.
                        </li>
                      </ul>
                    </li>
                    <li>
                      These speakers bring relatability, and their stories
                      inspire first-time founders more than polished unicorn
                      decks.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How can we improve outreach methods to potential speakers
                    and tackle speaker hesitancy?
                  </h3>
                  <h4 className="font-medium text-base mb-2">
                    🔹 Improving Speaker Outreach & Reducing Hesitancy
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      First, build a curated speaker pitch deck — a one-pager
                      that tells what Inspirit is, past speakers, and audience
                      size.
                    </li>
                    <li>
                      Outreach should be personalized: referencing a speaker's
                      tweet, podcast, or product makes a huge difference.
                    </li>
                    <li>
                      For hesitancy, show social proof: past event reels,
                      LinkedIn posts, and testimonials from speakers who've
                      enjoyed it.
                    </li>
                    <li>
                      Offer value to speakers too:
                      <ul className="list-disc pl-5 space-y-1 mt-1">
                        <li>
                          Content support (post-session reels, blog mentions).
                        </li>
                        <li>
                          Exclusive networking meets with alumni or faculty.
                        </li>
                        <li>
                          Moderated sessions with pre-shared questions to reduce
                          pressure.
                        </li>
                      </ul>
                    </li>
                  </ul>
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
                    E-Buddy is the flagship event of E-Club that focuses
                    exclusively on providing first-year students with mentorship
                    regarding entrepreneurship. Revamp the structure.
                  </h3>
                  <p>
                    The event can be revamped by introducing a more gamified
                    structure with mini-competitions like pitch roulette, meme
                    pitches, or ad design sprints. More hands-on peer mentorship
                    from 2nd-year students and consistent rewards can improve
                    participation. A buddy leaderboard or hostel-wise
                    competition might add excitement. Consistency is key, so
                    mentors need to be briefed well beforehand with a fixed
                    calendar.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Map out the journey of Ideastorm and increase engagement
                    from 2nd/3rd years.
                  </h3>
                  <p className="font-medium mb-1">Timeline:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Week 1 – Orientation + GTIF + Idea Funnel workshop</li>
                    <li>Week 2 – Problem validation + mentor mapping</li>
                    <li>
                      Week 3 – Market research session + progress checkpoint
                    </li>
                    <li>
                      Week 4 – Final pitch + showcase at a public venue like CRC
                      or Himalaya
                    </li>
                  </ul>

                  <p>
                    To attract 2nd/3rd years, highlight benefits like early
                    access to Nirmaan, networking with alumni, or mentorship
                    certificates. Cross-post updates on dept groups and reach
                    out via GSec PR networks.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="e-soc"
              title="E-Soc"
              icon={<Users className="h-5 w-5 text-purple-500" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How can we maximize participation of both freshie and senior
                    hostels in E-Soc? What PR events or stunts can be used?
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>
                      Start with an "E-Soc PR Month" right after freshie
                      orientation — include Meme Pitch, Ad-Mad, and Hostel Shark
                      Tank as intro events.
                    </li>
                    <li>
                      Use hostel-wise leaderboards where each participation or
                      win earns points — update and display them on Instagram or
                      notice boards.
                    </li>
                    <li>
                      Appoint E-Soc Reps for every hostel wing to spread word
                      via mess pings, group nudges, and room-to-room talk.
                    </li>
                    <li>
                      Plan Summit Streets mini-events like 2-minute stall
                      pitches or "Entrepreneur Bingo" with hostel-specific
                      shoutouts.
                    </li>
                    <li>
                      Add giveaways like "Top Hostel of the Month" (snack
                      treats, goodies, or E-Cell Insta feature).
                    </li>
                    <li>
                      Conduct flash challenges in hostel groups like
                      "Reel-a-Pitch" or "Startup Slogans" with 24-hour
                      submission deadlines.
                    </li>
                    <li>
                      Involve PG hostels through focused events like
                      "Research-to-Revenue" where students convert academic
                      ideas into startup pitches.
                    </li>
                    <li>
                      Use relatable stunts like "Find the Fake Startup" booth or
                      "Dumb Charades: Startup Edition" to grab casual attention.
                    </li>
                    <li>
                      Most importantly, keep events light, short, and repeatable
                      — frequency builds habit.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Vision and mission of CIC vs. TechSoc's BuildSchool:
                  </h3>
                  <p className="mb-2">
                    <span className="font-medium">
                      Vision and Mission of CIC:
                    </span>
                    <br />
                    CIC aims to empower students to identify, ideate, and solve
                    real campus-level problems using entrepreneurial thinking.
                    The mission is to make students treat IITM as a live testbed
                    for innovation — where their ideas can lead to real-world
                    improvements across mess, academics, tech infra, or student
                    life.
                  </p>
                  <p className="font-medium mb-2">
                    Difference from BuildSchool (TechSoc):
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                            Aspect
                          </th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                            CIC (E-Club)
                          </th>
                          <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                            BuildSchool (TechSoc)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">
                            Objective
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Problem-solving through entrepreneurial approach
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Skill-building through project-based learning
                          </td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-900">
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">
                            Structure
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Ideation → Mentorship → Pitching → (Optional)
                            Implementation
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Tech workshops → Project creation → Showcase
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">
                            Team Formation
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Cross-functional teams based on problem interest
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Teams often from same tech area (code, hardware)
                          </td>
                        </tr>
                        <tr className="bg-gray-50 dark:bg-gray-900">
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">
                            Outcome
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Impact-driven solutions with startup potential
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Technical growth, portfolio enhancement
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium">
                            Tone
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Open to all branches and non-tech backgrounds
                          </td>
                          <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                            Focused on tech-oriented students
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-2">
                    In short, CIC is impact-focused and solution-led, while
                    BuildSchool is skill-focused and learning-led.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="youth-conclave"
              title="Youth Conclave"
              icon={<Users className="h-5 w-5 text-purple-500" />}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Youth Conclave Events Classification & Engagement Plan for
                    Summit Streets
                  </h3>

                  <h4 className="font-medium text-base mb-2">
                    a. Pre-registered Events
                  </h4>
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">Ethletics</h5>
                    <p className="mb-2">
                      Ethletics was a high-energy, pre-registered event with
                      unique rounds like elevator pitches inside moving
                      vehicles. It tested quick thinking, startup understanding,
                      and creativity under pressure. Despite logistical hurdles
                      like unexpected turnout and tight timing, the event was a
                      crowd favorite. With early planning, this event can be
                      scaled further and even integrated with fun simulations in
                      Summit Streets.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">Webstart</h5>
                    <p className="mb-2">
                      Webstart focused on solving startup problems through
                      web/app design. Even though it was confirmed last minute,
                      over 15 teams joined via informal PR. The format was
                      smooth, and participants were highly engaged. With proper
                      mailer outreach and mentor inputs, this can evolve into a
                      flagship design sprint in future editions.
                    </p>
                  </div>

                  <h4 className="font-medium text-base mb-2">
                    b. On-spot Events
                  </h4>
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">BizBazaar</h5>
                    <p className="mb-2">
                      BizBazaar is a live marketplace challenge where teams set
                      up booths and pitch crazy fictional products to crowds.
                      Participants are judged on sales tactics, branding, and
                      crowd interaction. It's fun, spontaneous, and ideal for
                      drawing in passersby at Summit Streets. A good balance of
                      planning and chaos makes it one of the most engaging YC
                      events.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">Auction Wars</h5>
                    <p className="mb-2">
                      Auction Wars simulates a startup scenario where teams bid
                      on limited resources and react to real-time crises. It's
                      fast-paced, strategy-heavy, and engaging to both
                      participants and spectators. Random plot twists keep the
                      energy high, making it perfect for a walk-in crowd
                      environment with quick explanations and public judging.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">Stocks Are High</h5>
                    <p className="mb-2">
                      This is a simplified stock market simulation using tokens
                      and mock companies. Participants trade based on news
                      flashes and startup rumors. It brings in the energy of
                      finance, unpredictability, and crowd buzz — making it a
                      perfect low-setup, high-excitement on-spot game.
                    </p>
                  </div>

                  <h4 className="font-medium text-base mb-2">
                    c. Lecture Series
                  </h4>
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">Fireside Chats</h5>
                    <p className="mb-2">
                      Fireside Chats feature candid conversations with founders,
                      creators, and investors in a casual, open-audience format.
                      These sessions focus on personal stories, mistakes, and
                      turning points in their journey. The format encourages
                      audience questions and offers a refreshing break from
                      formal talks.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">
                      Content Creation Masterclass
                    </h5>
                    <p className="mb-2">
                      This session focuses on digital storytelling, reels, and
                      personal branding for aspiring creators. Aimed at students
                      interested in the creator economy, it mixes technical
                      skills with storytelling frameworks. The masterclass
                      brings in real-world examples and small group
                      interactions, making it a highly relatable lecture.
                    </p>
                  </div>

                  <h4 className="font-medium text-base mb-2">
                    Increasing Engagement in Summit Streets
                  </h4>
                  <p className="mb-4">
                    To increase engagement, we need to focus on pulling people
                    out of hostels first, not just engaging those already
                    outside. I'd recommend launching pre-Summit hype inside
                    hostels — teaser events like mini competitions, meme wars,
                    or short pitch games where winners get direct perks at
                    Summit Streets (free food coupons, YC fast-pass, goodies).
                  </p>
                  <p className="mb-4">
                    Once the crowd is there, we can use game-style stalls like
                    spin-the-wheel startup trivia, 2-minute idea pitches, or
                    startup version of beer pong to keep them moving across
                    stalls.
                  </p>
                  <p>
                    The main challenge is convincing students to show up —
                    especially seniors or PGs who often skip E-Summit. To solve
                    this, we can send hostel-wise promo reps + reels from past
                    events + live leaderboard updates with hostel names on the
                    board. Public hype + internal FOMO = more footfall + more
                    fun
                  </p>
                </div>
              </div>
            </Section>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
