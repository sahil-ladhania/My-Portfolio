"use client"

import { DownloadResumeComponent } from "./components/GetMyResumeComponent";
import { HeroComponent } from "./components/HeroComponent";
import { timelineData } from "./components/TimelineData";
import { Timeline } from "./components/WorkexTimelineComponent";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
      <HeroComponent/>
      <Timeline data={timelineData}/>
      <DownloadResumeComponent/>
    </div>
  );
}