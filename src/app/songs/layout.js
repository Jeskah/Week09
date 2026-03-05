export default function Songs({ children }) {
  return (
    <section>
      <h1>My Songs</h1>
      {children}  {/* THIS is where AllSongs or other pages appear */}
    </section>
  )
}