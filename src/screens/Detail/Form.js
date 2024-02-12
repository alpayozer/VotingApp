import React, { useState } from "react";
import { Box, Button, Radio } from "native-base";
import { useMutation } from "@apollo/client";
import { NEW_ANSWER_MUTATION } from "./queries";

const Form = ({ options, setIsVoted }) => {
  const [selected, setSelected] = useState("");

  const [newAnswer, { loading }] = useMutation(NEW_ANSWER_MUTATION);

  const handleSubmit = async () => {
    if (!selected) {
      return;
    }

    await newAnswer({
      variables: {
        option_id: selected,
      },
    });

    setIsVoted(true);
  };

  return (
    <Box py={3}>
      <Radio.Group value={selected} onChange={setSelected}>
        {options.map((option) => (
          <Radio value={option.id} my={1} key={option.id}>
            {option.text}
          </Radio>
        ))}
      </Radio.Group>
      <Button isLoading={loading} mt={5} onPress={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Form;
