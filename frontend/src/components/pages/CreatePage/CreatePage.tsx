import React, { useState } from "react";
import { Schedule, SubSchedule } from "../../../types/schedule";
import { useCreateSchedule } from "../../../hooks/useCreateSchedule";

function CreatePage(): JSX.Element {
  const {
    schedule,
    onCreateSubSchedule,
    onChangeTitle,
    onChangeSubTitle,
    onSubmit,
  } = useCreateSchedule();
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
          <input
            style={{ display: "inline-block" }}
            required
            type="text"
            key={subSchedule.uuid}
            onChange={(e) => {
              onChangeSubTitle(subSchedule.uuid, e);
            }}
            value={subSchedule.subtitle}
          />
        );
      })}
      <button onClick={() => console.log(schedule)}>제출하기</button>
    </form>
  );
}

export default CreatePage;
