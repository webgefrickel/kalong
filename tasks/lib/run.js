import warn from './warn';

const formatTime = time => time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');

const run = (fn, options) => {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();

  console.info(
    `[${formatTime(start)}] Starting '${task.name}${options ? ` (${options})` : ''}'...`
  );

  return task(options)
    .then(resolution => {
      const end = new Date();
      const time = end.getTime() - start.getTime();
      console.info(
        `[${formatTime(end)}] Finished '${task.name}${
          options ? ` (${options})` : ''
        }' after ${time} ms`
      );
      return resolution;
    })
    .catch(error => warn(error));
};

export default run;
