class DateFormatter {
  // 오늘 날짜와 비교하여 오늘 마감 기한이면 시간만 반환
  // 이번해를 비교하여 올해 마감 기한이면 월, 일 반환
  // 그 외에는 년, 월, 일 반환
  getDateFormat(
    deadline: string | number | Date,
    mode: "default" | "simple" = "default",
  ) {
    const now = new Date();
    const _deadline = new Date(deadline);
    const year = _deadline.getFullYear();
    const month = _deadline.getMonth();
    const date = _deadline.getDate();
    const hours = _deadline.getHours();
    const minutes = _deadline.getMinutes();
    if (mode === "default") {
      // if deadline is today
      if (
        now.getDate() === date &&
        now.getMonth() === month &&
        now.getFullYear() === year
      ) {
        return `오늘 ${hours}시 ${minutes}분`;
      }
      // if deadline is on month
      if (now.getMonth() === month && now.getFullYear() === year) {
        return `${month}월 ${date}일`;
      }
    } else {
      if (
        now.getDate() === date &&
        now.getMonth() === month &&
        now.getFullYear() === year
      ) {
        return `오늘 ${hours}시 ${minutes}분`;
      }
      if (
        Math.abs(now.getDate() - date) < 7 &&
        now.getMonth() === month &&
        now.getFullYear() === year
      ) {
        return `${Math.abs(now.getDate() - date)}일`;
      }
      if (Math.abs(now.getDate() - date) < 30 && now.getFullYear() === year) {
        return `${Math.floor(Math.abs(now.getDate() - date) / 7)}주`;
      }
      if (
        Math.abs(now.getMonth() - month) < 12 &&
        Math.abs(now.getFullYear() - year) <= 1
      ) {
        return `${Math.abs(now.getMonth() - month)}달`;
      }
    }
    return `${year}년 ${month}월 ${date}일`;
  }
}

export default DateFormatter;
