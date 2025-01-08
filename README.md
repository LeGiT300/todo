# ToDo App in React Native

A simple and intuitive ToDo application built using React Native. The app allows users to add and delete tasks while maintaining an organized and dynamic list. The code uses functional components, hooks (`useState`), and React Native's built-in components for layout and styling.

---

## **Table of Contents**

1. [Overview](#overview)  
2. [Features](#features)  
3. [Components](#components)  
   - [Header](#header)  
   - [Add](#add)  
   - [Items](#items)  
4. [Project Structure](#project-structure)  
5. [How to Run](#how-to-run)  
6. [App Preview](#app-preview)  
7. [Future Improvements](#future-improvements)

---
## App Preview

Here's a preview of how the app looks in action:

![Preview Image 1](../assets/preview.png)
![Preview Image 2](../assets/preview2.png)


## **Overview**

This ToDo app helps users manage their daily tasks. Users can add tasks to the list by entering them in the input field and delete tasks by pressing on the individual items in the list. Tasks must be at least 4 characters long to ensure meaningful entries.

---

## **Features**

- Add tasks to a to-do list.
- Delete tasks from the to-do list.
- Validate user input with alerts.
- Simple and intuitive UI.
- Responsive to user interactions.

---

## **Components**

### 1. **Header**
   - Displays the title of the app.
   - Provides a consistent header at the top of the screen.

### 2. **Add**
   - Contains an input field and a button to add new tasks.
   - Validates user input (task must be at least 4 characters long).
   - Displays an alert for invalid entries.

### 3. **Items**
   - Displays individual tasks in the to-do list.
   - Deletes a task when it is pressed.

---

## **Project Structure**

```
Root Directory
│
├── components
│   ├── header.js          // Contains the Header component
│   ├── add.js             // Contains the Add component
│   ├── items.js           // Contains the Items component
│
├── App.js                 // Main application file
├── package.json           // Project dependencies
└── README.md              // Project documentation
```

---

## **How to Run**

1. **Clone the Repository**  
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies**  
   Run the following command in the project directory:  
   ```bash
   npm install
   ```

3. **Start the Project**  
   Use Expo CLI to run the project:  
   ```bash
   expo start
   ```

4. **View on a Device or Emulator**  
   - Use the Expo Go app to scan the QR code displayed in your terminal or browser.  
   - Alternatively, run the app on an emulator (Android Studio or iOS Simulator).

---

## **App Preview**

The ToDo app has three main sections:

1. **Header**: Displays the app's title.  
2. **Input Field**: Allows users to add new tasks.  
3. **ToDo List**: Displays the current list of tasks, which can be deleted by tapping on them.

---

## **Future Improvements**

- Add a feature to mark tasks as completed.
- Save tasks persistently using AsyncStorage or a database.
- Add categories or priority levels for tasks.
- Improve UI with animations and better styling.

---

This project is a great starting point for anyone learning React Native or building simple task management apps. Feel free to modify and enhance the app to suit your needs!
