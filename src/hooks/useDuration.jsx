import { useMemo } from 'react';

function useDuration(startDate, endDate) {
  return useMemo(() => {
    if (!startDate || !endDate) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffMs = end - start;

    if (diffMs < 0) return null; // If endDate is before startDate

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      totalMilliseconds: diffMs,
      days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  }, [startDate, endDate]);
}

export default useDuration;
