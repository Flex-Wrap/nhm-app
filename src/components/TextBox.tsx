import "./TextBox.css"

export interface TextBoxProps {
  text: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const TextBox: React.FC<TextBoxProps> = ({ text, children, style }) => {
  return (
    <div className="text-box" style={style}>
      <p>{text}</p>
      {children}
    </div>
  );
};

export default TextBox;
