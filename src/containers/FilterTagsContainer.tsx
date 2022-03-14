import { useState } from "react";
import { useTags } from "../hooks/useTags";
import { selectedTags } from "../variables/selectedTags";
import { useReactiveVar } from "@apollo/client";

export const FilterTagsContainer = () => {
  const tags = useTags();
  //const [selectedTags, setSelectedTags] = useState<Record<string, boolean>>({});
  const reactiveVar = useReactiveVar(selectedTags);

  return (
    <div>
      {tags.map((tag) => {
        return (
          <label key={tag}>
            <input
              type="checkbox"
              checked={selectedTags()[tag] || false}
              onChange={(event) => {
                selectedTags({
                  ...selectedTags(),
                  [tag]: event.target.checked
                });
                //  setSelectedTags({ ...selectedTags, tag: event.target.checked })}
              }}
            />
            {tag}
          </label>
        );
      })}
    </div>
  );
};
