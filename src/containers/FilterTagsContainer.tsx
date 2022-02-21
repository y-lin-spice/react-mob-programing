import { useState } from "react";
import { useTags } from "../hooks/useTags";

export const FilterTagsContainer = () => {
  const tags = useTags();
  const [selectedTags, setSelectedTags] = useState<Record<string, boolean>>({});

  return (
    <div>
      {tags.map((tag) => {
        return (
          <label key={tag}>
            <input
              type="checkbox"
              checked={selectedTags[tag]}
              onChange={(event) =>
                setSelectedTags({ ...selectedTags, tag: event.target.checked })
              }
            />{" "}
            {tag}
          </label>
        );
      })}
    </div>
  );
};
