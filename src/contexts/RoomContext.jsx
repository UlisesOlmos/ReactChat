import { useState, createContext, useContext } from 'react';

const RoomContext = createContext()

const RoomProvider = ({children})=>{

    const [room,setRoom] = useState(1)

    return (
        <RoomContext.Provider value={{ room, setRoom }}>
          {children}
        </RoomContext.Provider>
      );
}

const useRoom = ()=> useContext(RoomContext)

export {RoomProvider,useRoom}