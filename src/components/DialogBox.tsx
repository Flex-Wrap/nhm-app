import "./DialogBox.css";

interface DialogBoxProps {
  image: string;
  text: string;
  character: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({image, text, character}) => {
    return (
        <div className="dialog-box"> 
            <img src={image} alt={character}/>
            <p>{text}</p>
        </div>
    )
}

export default DialogBox;