export interface TaskType {
    id: number; 
    title: string; 
    description: string; 
    done: boolean; 
};




// s'il n'y a pas de mot export, on ne peut pas utiliser l'interface




// export const FruitsList = () = > {
//     const fruits = ["Apple", "Peach", "Banana", ""];
//     return (
//         <ul>
//         {fruits.map( fruit => <li>{fruit}</li>)}   // (fruit: string, idx: number)
//         </ul>
//     )
// }

// c'est la même chose que ->

// return (
//     <ul>
//     <li>Apple</li>
//     <li>Peach</li>
//     <li>Banana</li>
//     <li>Grapes</li>
//     </ul>
// )




