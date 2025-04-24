"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/app/home/page.tsx">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About Me
          </h1>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src="/images/jay-mali.png"
                alt="Jay Mali"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Jay Mali
              </h2>
              <h3 className="text-xl text-purple-600 dark:text-purple-400 mb-4">
                Chemical Engineering, 2024 Batch
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm someone who loves building and learning new things. I
                question stuff till I really get it, and I don't like doing
                things half-baked. I've tried my hands at web design, ethical
                hacking, and coding, and I'm always up for a challenge. I care
                about clarity, teamwork, and doing things that actually make a
                difference, not just for the title.
              </p>

              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href="mailto:ch24b067@smail.iitm.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href="https://www.linkedin.com/in/jay-mali-9bb8b4267"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a href="tel:7038505882">
                    <Phone className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <a
                    href="https://github.com/jay-mali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Card className="border-l-4 border-l-purple-500 mb-8">
          <CardContent className="pt-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Positions of Responsibility
            </h4>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                Being a part of Inter-IIT street play, and in organising teams
                of Shaastra and Saarang boosted my creative and manager skills.
              </li>
              <li>
                I was part of WMO E-Cell AM where I learned React and JavaScript
                to create websites like this one.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="pt-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Skills & Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Development",
                "React",
                "JavaScript",
                "Entrepreneurship",
                "Problem Solving",
                "Team Management",
                "Event Planning",
                "Creative Thinking",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
