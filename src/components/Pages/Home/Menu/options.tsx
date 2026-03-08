// constants/menu.ts
import { BookOpenTextIcon, FolderCodeIcon, RssIcon, SparklesIcon } from "lucide-react";

export const options = [
  {
    id: 1,
    title: "Sobre",
    anchor: "about",
    icon: <BookOpenTextIcon />,
  },
  {
    id: 2,
    title: "Skills",
    anchor: "skills",
    icon: <SparklesIcon />,
  },
  {
    id: 3,
    title: "Projetos",
    anchor: "projects",
    icon: <FolderCodeIcon />,
  },
  {
    id: 4,
    title: "Blog",
    anchor: "blog",
    icon: <RssIcon />,
  },
];
