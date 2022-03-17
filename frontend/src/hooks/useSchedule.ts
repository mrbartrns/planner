import React, { useState, useCallback } from "react";
import { Schedule, SubSchedule } from "../types/schedule";
import { v4 } from "uuid";

function useSchedule() {
  // TODO: if whole day is true, set deadline_time to 23:59:59
  const [schedule, setSchedule] = useState<Schedule<SubSchedule>>({
    title: "",
    uuid: v4(),
    checked: false,
    sub_schedules: [],
    deleted_sub_schedules: [],
    deadline_date: "",
    deadline_time: "23:59:59",
    whole_day: false,
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
          ...prev.sub_schedules.filter(
            (sub: SubSchedule) => sub.uuid === uuid && sub.subtitle !== "",
          ),
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
