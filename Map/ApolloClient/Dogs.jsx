import React from 'react'
import {gql, useQuery} from '@apollo/client'

const DOGS = gql`
    query GetDogs{
        dogs{
            id
            breed
        }
    }
`

const Dogs = ({onDogSelected}) => {

    const {loading, error, data} = useQuery(DOGS)

    if (loading) return "Loading..."
    if (error) return `Error! ${error.message}`

    return(
        <select name="Dog" onChange={onDogSelected}>
            {data.dogs.map(dog =>(
                <option key={dog.id} value={dog.breed}>
                    {dog.breed}
                </option>
            ))}
        </select>
    )
}

export default Dogs

// INVOLVES IMAGES

// const GET_DOG_PHOTO = gql`
//   query Dog($breed: String!) {
//     dog(breed: $breed) {
//       id
//       displayImage
//     }
//   }
// `;

// function DogPhoto({ breed }) {
//   const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
//     variables: { breed },
//   });

//   if (loading) return null;
//   if (error) return `Error! ${error}`;

//   return (
//     <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
//   );
// }