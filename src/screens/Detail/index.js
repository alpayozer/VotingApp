import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_QUESTIONS_DETAIL } from "./queries";
import Loading from "../../components/Loading";
import { Box, Divider, Heading } from "native-base";
import Form from "./Form";
import Results from "./Results/index";

const Detail = ({ route }) => {
  const { id } = route.params;
  const [isVoted, setIsVoted] = useState(false);

  const { loading, data } = useQuery(GET_QUESTIONS_DETAIL, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <Loading />;
  }

  const { text, options } = data.questions_by_pk;

  return (
    <Box p={3}>
      <Heading>{text}</Heading>
      <Divider my={2} />

      {!isVoted ? (
        <Form options={options} setIsVoted={setIsVoted} />
      ) : (
        <Results id={id} />
      )}
    </Box>
  );
};

export default Detail;