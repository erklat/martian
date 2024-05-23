"use client";

import Search from "@/components/Search/Search";
import withLogger from "@/components/WithNameLogging/WithNameLogging";
import TSelectOption, { TSelectFunc } from "@/types/select";

type TProps = {
  options: TSelectOption[];
  onChange: TSelectFunc;
  value: TSelectOption[];
};

const PostsSearchInput: React.FC<TProps> = ({ options, onChange, value }) => {
  return (
    <div>
      <Search
        options={options}
        onChange={onChange}
        isMulti={true}
        value={value}
      />
    </div>
  );
};

export default withLogger(PostsSearchInput);
