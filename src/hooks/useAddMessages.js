import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useRoom } from "../contexts/RoomContext";
import { useUser } from "../contexts/UserContext";
import { auth, db } from "../firebase-config";
import { scrollMessagesBottom } from "../utilities/scrollBottom";

const useAddMessages = () => {

    const { user } = useUser()
    const { room } = useRoom()

    const path = `General${room}/messages`;

    const saveMessage = async (messageText) => {
        try {
            await addDoc(collection(db, "rooms",path), {
                userId: user.uid,
                name: user.displayName,
                text: messageText,
                profilePicUrl: user.photoURL,
                timestamp: serverTimestamp()
            }).then(() => scrollMessagesBottom())
        }
        catch (error) {
            console.error('Error writing new message to Firebase Database', error);
        }
    }

    const saveImageMessage = async (file) => {
        const LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a'

        try {
            // 1 - We add a message with a loading icon that will get updated with the shared image.
            const messageRef = await addDoc(collection(db, 'rooms',path), {
                userId: user.uid,
                name: user.displayName,
                imageUrl: LOADING_IMAGE_URL,
                profilePicUrl: user.photoURL,
                timestamp: serverTimestamp()
            });

            // 2 - Upload the image to Cloud Storage.
            const filePath = `${auth.currentUser.uid}/${messageRef.id}/${file.name}`;
            const newImageRef = ref(getStorage(), filePath);
            const fileSnapshot = await uploadBytesResumable(newImageRef, file);

            // 3 - Generate a public URL for the file.
            const publicImageUrl = await getDownloadURL(newImageRef);

            // 4 - Update the chat message placeholder with the image's URL.
            await updateDoc(messageRef, {
                imageUrl: publicImageUrl,
                storageUri: fileSnapshot.metadata.fullPath
            })

        } catch (error) {
            console.error('There was an error uploading a file to Cloud Storage:', error);
        }
    }

    return { saveMessage, saveImageMessage }
}

export default useAddMessages;