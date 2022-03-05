import React, { useState, useCallback } from "react";
import { useMutation } from "react-query";
import { useSchedule } from "../../../hooks/useSchedule";
import api from "../../../utils/instance";
import { Schedule, SubSchedule } from "../../../types/schedule";
import { v4 } from "uuid";

function CreatePage(): JSX.Element {
  const {
    schedule,
    setSchedule,
    onChangeSubTitle,
    onChangeTitle,
    onCreateSubSchedule,
    onDeleteSubSchedule,
  } = useSchedule();
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
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(schedule);
      }}
    >
      <h1>Create Page</h1>
      <label>제목</label>
      <input type="text" onChange={onChangeTitle} value={schedule.title} />
      <h2>서브스케쥴 추가</h2>
      <button onClick={onCreateSubSchedule}>추가하기</button>
      {schedule.sub_schedules.map((subSchedule, idx) => {
        return (
          <div key={subSchedule.uuid}>
            <input
              style={{ display: "inline-block" }}
              required
              type="text"
              onChange={(e) => {
                onChangeSubTitle(subSchedule.uuid, e);
              }}
              value={subSchedule.subtitle}
            />
            <button onClick={() => onDeleteSubSchedule(subSchedule.uuid)}>
              삭제
            </button>
          </div>
        );
      })}
      <button onClick={() => console.log(schedule)}>제출하기</button>
    </form>
  );
}

export default CreatePage;
