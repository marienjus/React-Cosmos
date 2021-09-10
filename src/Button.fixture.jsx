import { useSelect } from 'react-cosmos/fixture';
import Button  from "./components/Button/Button";

export default () => { 
  const [variant] = useSelect('variant', {
    options: ['primary', 'secondary'],
  });

return (
  <div className="w-60 mx-auto">
    <Button variant={variant}>Cosmos</Button>
  </div>
)}