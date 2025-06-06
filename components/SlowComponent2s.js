export default async function SlowComponent2s() {
    const slowResponse = await fetch('https://procodrr.vercel.app/?sleep=2000')
    const data = await slowResponse.json()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
