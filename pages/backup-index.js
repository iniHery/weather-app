import Button from '../components/Button'

export default function Home() {
  return (
    <div>
      <div className="text-red">swalla 1</div>
      <div style={{ background: "yellow", textAlign: "center", color: "blue" }}>swalla 2</div>

      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>

      <div>
        <img src="/cloudy.png" />
      </div>
    </div>
  )
}
