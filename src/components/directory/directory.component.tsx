import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import initialSections from "./directory.data";

type Sections = Section[];

export type Section = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string | undefined;
};

export const Directory: React.FC = () => {
  const [sections, setSections] = useState<Sections>(initialSections);

  return (
    <div role="directory-menu" className="directory-menu">
      {sections.map((section: Section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};
