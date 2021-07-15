import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { memo, useState, useEffect } from "react";

dayjs.extend(relativeTime);

function Timer(props: TimerProps) {
  const [, setCurrent] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setCurrent((current) => !current), 1000 * 58);
    return () => {
      clearInterval(interval);
    };
  });
  return <>{dayjs().to(dayjs(props.start))}</>;
}

export default memo(Timer, (prev, next) => prev.start === next.start);

type TimerProps = {
  start?: string | Date;
};
