import ChildY from "./ChildY";

const ParentX = () => {
  return (
    <div>
      <h1>Learn children props</h1>
      <ChildY>
        <mark>Hello Children Props</mark>
        <strong>I am Strong</strong>
      </ChildY>
    </div>
  );
};

export default ParentX;
