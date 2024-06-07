

* **Frontend: React**
  * **React**: Used for building the user interface. Components are structured to provide a seamless chat experience.
  * **React CSS**: Utilized for styling the application, ensuring a responsive and user-friendly interface.

* **State Management: Zustand**
  * **Zustand**: A lightweight state management library for React. It handles the global state of the application, managing user sessions, chat data, and UI states efficiently.

* **Backend: Firebase**
  * **Firebase Authentication**: Manages user authentication, providing secure sign-in and sign-out functionalities. Supports various authentication methods (email/password, Google, etc.).
  * **Firebase Realtime Database**: Stores chat messages and other real-time data. It allows users to send and receive messages instantly.
  * **Firestore**: A flexible, scalable database for more structured data storage. It can be used alongside the Realtime Database for additional features like user profiles, chat metadata, etc.

## Key Functionalities Implemented

* **User Authentication**
  * Implemented user sign-up, sign-in, and sign-out functionalities using **Firebase Authentication**.
  * Integrated various authentication methods for flexibility.

* **Real-time Chat**
  * Developed chat components where users can send and receive messages in real-time.
  * Utilized **Firebase Realtime Database** for storing and syncing chat messages across all connected clients.

* **State Management with Zustand**
  * Managed global state using **Zustand**, ensuring a smooth and efficient state transition.
  * **Zustand** stores information such as the current user, chat messages, and UI states.

* **Styling**
  * Applied **React CSS** for styling the components, making the chat application visually appealing and user-friendly.
  * Ensured responsive design for compatibility with different devices and screen sizes.

## Project Structure

* **Components**: Organized into reusable components (e.g., ChatWindow, MessageInput, UserList).
* **State Management**: Centralized global state using **Zustand**, with hooks for accessing and updating state.
* **Firebase Integration**: Configured **Firebase** services (**Authentication**, **Realtime Database**, **Firestore**) for backend functionalities.
* **Styles**: Applied CSS modules or styled-components for modular and maintainable styling.

## How It Works

### User Flow
1. Users sign up or log in using **Firebase Authentication**.
2. Authenticated users are redirected to the chat interface.
3. Users can send and receive messages in real-time, which are stored in **Firebase Realtime Database**.

### Data Flow
* **Zustand** manages the state of the application, updating the UI based on state changes.
* **Firebase** services handle data persistence and real-time updates.


![Sarvs-WeChat](https://github.com/0sarvesh/webchat_app-Fullstack/assets/119318104/90b11dbf-ae35-46f1-9f35-6a8be1cf2695)
>>>>>>> 93c59fd101d9c7eded7c91dc704af82d2fbec3c7
