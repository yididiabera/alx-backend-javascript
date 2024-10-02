export default function guardrail(mathFunction) {
  const queue = [];
  let result = 0;
  try {
    result = mathFunction();
  } catch (error) {
    result = `Error: ${error.message}`;
  }
  queue.push(result);
  queue.push('Guardrail was processed');
  return queue;
}
