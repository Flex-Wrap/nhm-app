import React from "react";
import ProfileCutout from "../components/ProfileCutout";
import leftImg from "../assets/oops.jpg";
import safariImg from "../assets/safari.jpg";

export const Map: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${safariImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1>Map Page</h1>
      <p>
        This is the Map pagesss
        templatsdfjklhgdslkjgfhskldfghsdlfkjghdslkjghsdlkgjhdslgkjhsdfglkjhdsgflkjhe.
      </p>
      <p>
        This is the Map pagesss
        templatsdfjklhgdslkjgfhskldfghsdlfkjghdslkjghsdlkgjhdslgkjhsdfglkjhdsgflkjhe.
      </p>
      <ProfileCutout image={leftImg}>
        <h1>Map Page</h1>
        <p>
          This is the Map pagesss
          templatsdfjklhgdslkjgfhskldfghsdlfkjghdslkjghsdlkgjhdslgkjhsdfglkjhdsgflkjhe.
        </p>
      </ProfileCutout>
    </div>
  );
};
