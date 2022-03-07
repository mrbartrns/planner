import React, { useState, useCallback } from "react";
import { Schedule, SubSchedule } from "../types/schedule";
import { useMutation } from "react-query";
import api from "../utils/instance";
import { v4 } from "uuid";

function useSchedule() {
  const [schedule, setSchedule] = useState<Schedule<SubSchedule>>({
    title: "",
    uuid: v4(),
    checked: false,
    sub_schedules: [],
    deleted_sub_schedules: [],
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

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSchedule((prev) => {
        return {
          ...prev,
          title: e.target.value,
        };
      });
    },
    [],
  );

  const onChangeSubTitle = useCallback(
    (uuid: string, e: React.ChangeEvent<HTMLInputElement>) => {
      setSchedule((prev) => {
        return {
          ...prev,
          sub_schedules: prev.sub_schedules.map((sub: SubSchedule) =>
            sub.uuid === uuid ? { ...sub, subtitle: e.target.value } : sub,
          ),
        };
      });
    },
    [],
  );

  const onDeleteSubSchedule = useCallback((uuid: string) => {
    setSchedule((prev) => {
      return {
        ...prev,
        sub_schedules: prev.sub_schedules.filter(
          (sub: SubSchedule) => sub.uuid !== uuid,
        ),
        deleted_sub_schedules: [
          ...(prev.deleted_sub_schedules || []),
          ...prev.sub_schedules.filter((sub: SubSchedule) => sub.uuid === uuid),
        ],
      };
    });
  }, []);
  return {
    schedule,
    setSchedule,
    onCreateSubSchedule,
    onChangeTitle,
    onChangeSubTitle,
    onDeleteSubSchedule,
  };
}

export { useSchedule };
