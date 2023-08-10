when using handleClick with button or to make it more simpler when used inside a function
need to call handleClick() to make button work

```jsx
const onClick = () => {
  console.log("Button clicked"); // Log a message to the console when the button is clicked
  handleClick(); // Call the handleClick function provided by the parent component
};
```

the essence of app.js is to show all thre buttons then in button.js component style that button to be how it looks

in app.js added icon to show in all app
also to show icon can show as component inside button inside return when passed as prop

then do children to call in button.js to access all the props i want

its better to style like this for icon

```jsx
  <Button handleClick={handleButtonClick2}>

          <RiPlayCircleFill className="inline-block ml-3 text-2xl" />
        </Button>

        ``jsx
```
