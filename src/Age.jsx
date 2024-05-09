export default function Age({ contentYear, contentMonths, contentDay }) {
  return (
    <>
      <p>
        <span className="text-primary-purple text-[5rem] pr-2 inline-block">
          {!contentYear ? (contentYear === 0 ? "0" : "--") : contentYear}
        </span>
        years
      </p>
      <p>
        <span className="text-primary-purple text-[5rem] pr-2 inline-block">
          {!contentMonths ? (contentMonths === 0 ? "0" : "--") : contentMonths}
        </span>
        months
      </p>
      <p>
        <span className="text-primary-purple text-[5rem] pr-2 inline-block">
          {!contentDay ? (contentDay === 0 ? "0" : "--") : contentDay}
        </span>
        days
      </p>
    </>
  );
}
