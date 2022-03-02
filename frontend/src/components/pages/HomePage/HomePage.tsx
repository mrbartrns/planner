import React, { useState } from "react";
import { useFetchSchedules } from "../../../hooks/useFetchSchedules";
import { Schedule, SubSchedule } from "../../../types/schedule";

function HomePage(): JSX.Element {
  const {
    data,
    isLoading,
    error,
    dataUpdatedAt,
    onSubmit,
    schedule,
    setSchdule,
  } = useFetchSchedules();

  console.log(data);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(schedule);
      }}
    >
      <div>
        <label>title</label>
        <input
          type="text"
          onChange={(e) => {
            setSchdule((prev) => {
              return {
                ...prev,
                title: e.target.value,
                deadLine: Date.now(),
              };
            });
          }}
        />
        <input type="submit" value="제출" />
      </div>
    </form>
  );
}

export { HomePage };
