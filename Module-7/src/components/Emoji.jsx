import { useEmojiContext } from "../context/EmojiContext";

const Emoji = () => {

    // Using the context to get the current emoji and the function to change it
    const {emoji, changeMood} = useEmojiContext();

    return (
        <div>
            <h1>{emoji}</h1>
            <button onClick={changeMood}>Change Mood</button>
        </div>
    )
}

export default Emoji;