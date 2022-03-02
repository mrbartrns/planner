import { useState, useCallback } from "react";
import { Schedule, SubSchedule } from "../types/schedule";
import { useMutation } from "react-query";
import api from "../utils/instance";
import { v4 } from "uuid";

function useCreateSchedule() {
  const [schedule, setSchedule] = useState<Schedule<SubSchedule>>({
    title: "",
    uuid: v4(),
    checked: false,
    sub_schedules: [],
  });

  const onCreateSubSchedule = useCallback(() => {
    setSchedule((prev) => {
      return {
        ...prev,
        sub_schedules: [
          ...prev.sub_schedules,
          { uuid: v4(), subtitle: "", checked: false },
        ],
      };
    });
  }, []);

  const onChangeTitle = useCallback((e: any) => {
    setSchedule((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  }, []);

  const onChangeSubTitle = useCallback((uuid: string, e: any) => {
    setSchedule((prev) => {
      return {
        ...prev,
        sub_schedules: prev.sub_schedules.map((sub: SubSchedule) =>
          sub.uuid === uuid ? { ...sub, subtitle: e.target.value } : sub,
        ),
      };
    });
  }, []);

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
    schedule,
    onCreateSubSchedule,
    onChangeTitle,
    onChangeSubTitle,
    onSubmit,
  };
}

export { useCreateSchedule };
