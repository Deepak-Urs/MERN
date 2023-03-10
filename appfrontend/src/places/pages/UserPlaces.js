import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [{
    id: '1',
    title: 'Empire State Building',
    description: 'ESB One',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St., New York, NY 10001',
    coordinates: {
        lat: 40.7484405,
        lng: -73.9856644
    },
    creator: 'u1'
},
{
    id: '2',
    title: 'Empire State Building',
    description: 'ESB One',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St., New York, NY 10001',
    coordinates: {
        lat: 40.7484405,
        lng: -73.9856644
    },
    creator: 'u2'
}, {
    id: '3',
    title: 'Empire State Building',
    description: 'ESB One',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St., New York, NY 10001',
    coordinates: {
        lat: 40.7484405,
        lng: -73.9856644
    },
    creator: 'u3'
}]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator == userId)

    return (
        <PlaceList items={loadedPlaces}/>
    )
}

export default UserPlaces
