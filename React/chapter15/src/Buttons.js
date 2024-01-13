const resetButtons = () => {
  const buttons = document.getElementsByTagName("button");
  Array.from(buttons).forEach((button) => {
    button.classList.remove("selected-button");
  });
};

const Buttons = ({ setCurrentScreen }) => {
  return (
    <form className="buttons" onSubmit={(e) => e.preventDefault()}>
      <button
        type="button"
        onClick={(e) => {
          setCurrentScreen("users");
          resetButtons();
          e.target.classList.add("selected-button");
        }}
      >
        users
      </button>
      <button
        type="button"
        onClick={(e) => {
          setCurrentScreen("posts");
          resetButtons();
          e.target.classList.add("selected-button");
        }}
      >
        posts
      </button>
      <button
        type="button"
        onClick={(e) => {
          setCurrentScreen("comments");
          resetButtons();
          e.target.classList.add("selected-button");
        }}
      >
        comments
      </button>
    </form>
  );
};

export default Buttons;
