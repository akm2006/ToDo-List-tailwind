# ToDoTailwind(TaskMaster)

**ToDoTailwind** is an interactive, responsive To-Do list app that showcases my progression in web development, incorporating **Tailwind CSS**, **JavaScript**, and **localStorage**. This application allows users to create, delete, and mark tasks as completed, with data stored persistently across sessions via the browser’s localStorage.

## Live Demo

Check out the live version of the app [here](https://akm2006.github.io/ToDo-List-tailwind/).

## Key Features

- **Task Management**: Users can add, delete, and toggle tasks.
- **Persistence with localStorage**: All tasks are stored in **localStorage**, allowing them to persist even after a browser refresh.
- **Responsive UI**: Built with **Tailwind CSS**, ensuring the app looks great on all devices.
- **Hover Effects**: Interactive buttons and icons with built-in hover states using Tailwind’s utilities.

## Technologies Used

- **HTML5**: For creating a well-structured, semantic layout.
- **CSS3**: Leveraging **Tailwind CSS** for a utility-first, mobile-first design.
- **JavaScript**: For DOM manipulation, task management, and **localStorage** integration.

## Tailwind CSS and localStorage

- **Tailwind CSS**: Tailwind’s utility-first approach made it easy to quickly style the app while maintaining full control over its responsiveness. Flexbox and custom spacing were used extensively to create a fluid layout.
  
- **localStorage**: The app uses **localStorage** to store the list of tasks. When tasks are added, removed, or marked as completed, the app updates **localStorage** so that tasks persist across page reloads. This ensures that users' to-do lists remain intact even after they close or refresh the browser.

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/akm2006/ToDo-List-tailwind.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the app locally:
    ```bash
    npm start
    ```


## Conclusion

This project is an example of using **Tailwind CSS** and **localStorage** to build a responsive, interactive web application. It helped me practice modern front-end development skills and demonstrated how to maintain state in the browser, improving user experience.
