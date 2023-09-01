import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = [
    "Paris",
    "Oslo",
    "London",
    "Kremlin",
    "Rome",
    "Cairo",
    "Budapest",
    "Jakarta",
    "New Delhi",
  ];
  const handleOnSelectItem = (item: String) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleOnSelectItem}
      />
      <Alert>
        hello<strong> world</strong>
      </Alert>
      <Button
        color="dark"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Push Me
      </Button>
    </div>
  );
}
export default App;
