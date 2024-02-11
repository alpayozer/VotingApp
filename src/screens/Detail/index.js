import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_QUESTIONS_DETAIL } from "./queries";
import Loading from "../../components/Loading";
import { Box, Heading } from "native-base";
import Form from "./Form";

const Detail = ({ route }) => {
  const { id } = route.params;

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
      <Form options={options} />
    </Box>
  );
};

export default Detail;
