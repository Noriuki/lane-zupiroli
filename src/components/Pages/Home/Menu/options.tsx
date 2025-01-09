// constants/menu.ts
import { BookOpenTextIcon, FolderCodeIcon, RssIcon } from "lucide-react";

export const options = [
  {
    id: 1,
    title: "Sobre",
    anchor: "about",
    icon: <BookOpenTextIcon />,
  },
  {
    id: 2,
    title: "Projetos",
    anchor: "projects",
    icon: <FolderCodeIcon />,
  },
  {
    id: 3,
    title: "Blog",
    anchor: "blog",
    icon: <RssIcon />,
  },
];
