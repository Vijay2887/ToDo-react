# ToDo-react
# ToDo List React Component

This repository contains a simple React component for managing a to-do list. It allows users to add chores to a list and displays them in an ordered list. The component provides basic functionality for adding items to the list.

## Features

- Add new chores to the list
- Display a list of added chores

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-list-react.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-list-react
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Import the `ToDo` component into your React application:

    ```jsx
    import ToDo from './ToDo';
    ```

2. Use the `ToDo` component in your application:

    ```jsx
    function App() {
        return (
            <div className="App">
                <ToDo />
            </div>
        );
    }

    export default App;
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the to-do list in action.

## Component Details

- **`ToDo`**: The main component that renders the to-do list functionality.
  - **State Variables**:
    - `value`: Holds the current input value for the chore.
    - `chores`: An array that stores the list of chores.
  - **Functions**:
    - `handleAddChore`: Adds the current value to the list of chores and resets the input field.
    - `handleChange`: Updates the `value` state when the input field changes.

## Contributing

Feel free to submit issues or pull requests if you have any improvements or suggestions. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
