// Button component accepts a prop called handleClick
function Buttons({ handleClick, children }) {
  // Define an internal function to handle button clicks
  const onClick = () => {
    console.log("Button clicked"); // Log a message to the console when the button is clicked
    handleClick(); // Call the handleClick function provided by the parent component
  };

  // Render a button element with the onClick event handler
  return (
    <div>
      <button
        className="bg-gray-400 hover:bg-grey-900 text-white font-bold  rounded-xl px-4 py-2 m-3 btn-primary"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

// Export the Button component for use in other parts of the application
export default Buttons;
