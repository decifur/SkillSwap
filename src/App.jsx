import { Button, ListItem, UnorderedList } from "@chakra-ui/react"

const App = () => {
  return (
    <div className='p-5'>
      <strong className='text-2xl block'>Technologies</strong><br />
      <UnorderedList>
        <ListItem>Tailwind CSS</ListItem>
        <ListItem>Chakra-UI</ListItem>
        <ListItem>React-Router-Dom</ListItem>
        <ListItem>Redux-toolkit</ListItem>
      </UnorderedList>
    </div>
  )
}

export default App