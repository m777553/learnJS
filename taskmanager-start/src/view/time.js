// чтение даты в человеческом формате
const date = dueDate !== null ? dueDate.toLocaleString(`en-US`, {
  day: `numeric`,
  month: `long`
}) : ``;
const time = dueDate !== null ? dueDate.toLocaleString(`en-US`, {
  hour: `numeric`,
  minute: `numeric`
}) : ``;

export {date, time};
