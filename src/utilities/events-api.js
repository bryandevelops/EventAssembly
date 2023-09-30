export async function getFivePastEvents() {
  const res = await fetch('/api/events/past');
  console.log('IN EVENTS API:', res)
  return res.json();
}