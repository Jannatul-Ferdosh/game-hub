import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef(null);
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={10}
          placeholder="Search Games..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
