import Hero from './components/Hero'
import GroupSection from './components/GroupSection'
import group1a from '/images/group1a.jpg'
import group1b from '/images/group1b.jpg'
import group2a from '/images/group2a.jpg'
import group2b from '/images/group2b.jpg'
import group3a from '/images/group3a.jpg'
import group3b from '/images/group3b.jpg'
import group4a from '/images/group4a.jpg'
import group4b from '/images/group4b.jpg'
import group5a from '/images/group5a.jpg'
import group5b from '/images/group5b.jpg'
import group6a from '/images/group6a.jpg'
import group6b from '/images/group6b.jpg'
import group7a from '/images/group7a.jpg'
import group7b from '/images/group7b.jpg'

function App() {
  return (
    <div className="bg-[#2b1f1a] min-h-screen font-sans">
      <Hero />
      <GroupSection title="PPPEPS" images={[group1a, group1b]} />
      <GroupSection title="Eco-Catalysts" images={[group2a, group2b]} />
      <GroupSection title="Plastic Destroyers" images={[group3a, group3b]} />
      <GroupSection title="PHAse out Microplastic" images={[group4a, group4b]} />
      <GroupSection title="Eco-Chemists" images={[group5a, group5b]} />
      <GroupSection title="Horizon" images={[group6a, group6b]} />
      <GroupSection title="Exhibition" images={[group7a, group7b]} />
    </div>
  )
}

export default App