import Card from "./Card"
import Data from '../data';

export default function Jobs() {
    return ( 
        Data.map((job, index) => {
            return (
             <Card key={index} item={job} />
            )
        })
     );
}
