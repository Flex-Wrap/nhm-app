interface DialogBoxProps {
  image: string;
  text: string;
  character: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({image, text, character}) => {
    return (
        <div> 
            <img src={image} alt={character}/>
            <p>{text}</p>
        </div>
    )
}

export default DialogBox;