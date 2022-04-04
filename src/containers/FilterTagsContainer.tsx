import { useReactiveVar } from "@apollo/client";
import { useTags } from "../hooks/useTags";
import { selectedTags } from "../variables/selectedTags";

export const FilterTagsContainer = () => {
  const tags = useTags();
  console.log("rerender!");
  // useReactiveVar(selectedTags);
  return (
    <div>
      {tags.map((tag) => {
        return (
          <label key={tag}>
            <input
              type="checkbox"
              // checked={selectedTags()[tag] || false}
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
