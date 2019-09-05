import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'

function RoomContainer({context}){
    const { loading, sortedRooms, rooms } = context;

    if(loading){
        return <Loading></Loading>
    }
    else{
        return (
            <>
                <RoomFilter rooms={rooms}></RoomFilter>
                <RoomList rooms={sortedRooms}></RoomList>
            </>
        );
    }
}

export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import { RoomConsumer } from '../context'
// import Loading from './Loading'

// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value;
//                     if(loading){
//                         return <Loading></Loading>
//                     }
//                     else{
//                         return (
//                             <div>
//                                 hello from Room Container
//                                 <RoomFilter rooms={rooms}></RoomFilter>
//                                 <RoomList rooms={sortedRooms}></RoomList>
//                             </div>
//                         );
//                     }
//                 }
//             }
//         </RoomConsumer>
//     );
// }

// export default RoomContainer