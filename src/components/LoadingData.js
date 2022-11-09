export default async function loadingData(url) {
  if(!url) {return;}
  const responce = await fetch(url);
  const data = await responce.json();
  return data;
}
