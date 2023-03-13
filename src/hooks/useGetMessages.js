import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { useRoom } from "../contexts/RoomContext";

const useGetMessages = () => {
    // Create the query to load the last 12 messages and listen for new ones.

    const [messages, setMessages] = useState([]);
    const [users,setUsers] = useState([]);
    const {room} = useRoom()

    const path = `rooms/General${room}/messages`;

    const getMessages = () => {

        const queryMessages = query(collection(db,path), orderBy('timestamp', 'desc'), limit(50));

        return onSnapshot(queryMessages, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({ ...doc.data() })) 
            const usersIds = [...new Set(data.map(el => el.userId))]

            setUsers(usersIds.map((id)=> {
                const doc = data.filter(doc => doc.userId === id)[0]
                const userData = { id, name : doc.name,profilePicUrl: doc.profilePicUrl}

                return userData
            }))

            setMessages(data.reverse())
        });
    }

    useEffect(() => getMessages(),[room])


    return { messages ,users}
}



export default useGetMessages