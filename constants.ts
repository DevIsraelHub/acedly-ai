import { Code, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const features = [
  {
    title: 'Music Generation',
    description: 'AI-powered music generation.',
    icon: Music,
  },
  {
    title: 'Video Generation',
    description: 'AI-powered video generation.',
    icon: VideoIcon,
  },
]

export const tools = [
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
];
