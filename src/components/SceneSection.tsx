import { ContinueButton } from "./ContinueButton"
import ProfileCutout from "./ProfileCutout"
import TextBox from "./TextBox"
import "./SceneSection.css";

type SceneSectionProps = {
    image: string
    text: string
    to: string
    buttonText: string
}

const SceneSection: React.FC<SceneSectionProps> = ({image, text, to, buttonText}) => {
    return (
        <div className="scene-section">
            <ProfileCutout image={image} />
            <TextBox text={text}/>
            <ContinueButton to={to} text={buttonText} />
        </div>
    )
}

export default SceneSection;