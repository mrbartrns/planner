import React, { useState, useCallback } from "react";
import { Schedule, SubSchedule } from "../types/schedule";
import { useMutation } from "react-query";
import api from "../utils/instance";
import { v4 } from "uuid";
import { useSchedule } from "./useSchedule";

function useCreateSchedule() {
  const { schedule, setSchedule } = useSchedule();
  const mutation = useMutation((data: Schedule<SubSchedule>) =>
    api.post("/api/data", data),
  );

  const onSubmit = useCallback(async (data: Schedule<SubSchedule>) => {
    try {
      mutation.mutateAsync(data);
      setSchedule({
        title: "",
        uuid: v4(),
        checked: false,
        sub_schedules: [],
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return {
    onSubmit,
  };
}

export { useCreateSchedule };
