import React, { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { Schedule, SubSchedule } from "../../types/schedule";
import { Link } from "react-router-dom";
import api from "../../utils/instance";

function HomePage(): JSX.Element {
  const fetcher = (): Promise<Array<Schedule<SubSchedule>>> =>
    api.get("/api/data").then((response) => response.data);
  const {
    data,
    isLoading,
    error,
    dataUpdatedAt,
  }: UseQueryResult<Array<Schedule<SubSchedule>>> = useQuery(
    "/api/data",
    fetcher,
  );
  return (
    <div>
      <h1>Main Page</h1>
      {data?.map((schedule: Schedule<SubSchedule>) => {
        return (
          <div key={schedule.uuid}>
            <Link to={`/detail/${schedule.uuid}`}>{schedule.uuid}</Link>
          </div>
        );
      })}
    </div>
  );
}

export { HomePage };
