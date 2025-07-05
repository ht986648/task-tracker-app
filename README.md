# Task Tracker App

A modern, feature-rich task management application built with React, Vite, and Tailwind CSS. Organize your tasks with priority levels, due dates, tags, and enjoy a beautiful dark/light mode interface.

## ✨ Features

### 🎯 Core Functionality
- **Task Management**: Create, edit, delete, and mark tasks as complete
- **Priority Levels**: Set Low, Medium, or High priority for each task
- **Due Dates**: Add due dates to track deadlines
- **Tags/Categories**: Organize tasks with custom tags
- **Search Functionality**: Find tasks by title, description, or tags
- **Task Filtering**: Filter by All, Completed, or Pending tasks

### 🎨 User Experience
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Smooth Animations**: Beautiful transitions and hover effects
- **Modern UI**: Clean, intuitive interface with Tailwind CSS
- **Lucide Icons**: Beautiful, consistent iconography

### 💾 Data Persistence
- **Local Storage**: Tasks and user preferences persist across sessions
- **User Authentication**: Simple username-based login system
- **Auto-save**: Changes are automatically saved

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/task-tracker.git
   cd task-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📖 Usage Guide

### Getting Started
1. **Login**: Enter any username to get started
2. **Create Tasks**: Use the form to add new tasks with:
   - Title (required)
   - Description (optional)
   - Priority level (Low/Medium/High)
   - Due date
   - Tags (comma-separated)

### Managing Tasks
- **Complete Tasks**: Check the checkbox to mark as done
- **Edit Tasks**: Click the pencil icon to modify task details
- **Delete Tasks**: Click the trash icon to remove tasks
- **Search**: Use the search bar to find specific tasks
- **Filter**: Use filter buttons to view All/Completed/Pending tasks

### Dark Mode
- Click the moon/sun icon in the header to toggle themes
- Your preference is automatically saved and restored

## 🏗️ Project Structure

```
task-tracker/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Login.jsx          # User authentication
│   │   ├── TaskForm.jsx       # Task creation/editing
│   │   ├── TaskItem.jsx       # Individual task display
│   │   ├── TaskList.jsx       # Task container
│   │   ├── TaskFilter.jsx     # Task filtering
│   │   └── SearchBar.jsx      # Search functionality
│   ├── utils/
│   │   └── localStorage.js    # Data persistence utilities
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   ├── App.css               # Global styles
│   └── index.css             # Tailwind CSS imports
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🧩 Component Architecture

### Core Components

#### `App.jsx` - Main Application
- **State Management**: Manages all application state
- **Dark Mode**: Handles theme switching and persistence
- **Data Flow**: Coordinates between all components
- **Authentication**: Controls login/logout flow

#### `Login.jsx` - User Authentication
- **Beautiful UI**: Gradient background with animations
- **Form Validation**: Ensures username is provided
- **Local Storage**: Saves user session
- **Dark Mode Support**: Responsive to theme changes

#### `TaskForm.jsx` - Task Creation/Editing
- **Dual Mode**: Creates new tasks or edits existing ones
- **Form Fields**: Title, description, priority, due date, tags
- **Validation**: Ensures required fields are filled
- **Auto-reset**: Clears form after submission

#### `TaskItem.jsx` - Individual Task Display
- **Rich Display**: Shows all task details with proper formatting
- **Priority Badges**: Color-coded priority indicators
- **Action Buttons**: Edit, delete, and complete actions
- **Lucide Icons**: Modern iconography for actions

#### `TaskList.jsx` - Task Container
- **List Rendering**: Maps tasks to TaskItem components
- **Empty State**: Shows message when no tasks exist
- **Props Forwarding**: Passes necessary props to child components

#### `TaskFilter.jsx` - Task Filtering
- **Filter Options**: All, Completed, Pending
- **Dynamic Counts**: Shows task counts for each category
- **Active States**: Highlights selected filter
- **Responsive Design**: Works on all screen sizes

#### `SearchBar.jsx` - Search Functionality
- **Real-time Search**: Filters tasks as you type
- **Search Scope**: Searches title, description, and tags
- **Icon Integration**: Lucide search icon with click-to-focus
- **Accessibility**: Proper focus management

## 🛠️ Technical Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, consistent icon library

### State Management
- **React Hooks**: useState, useEffect for local state
- **Local Storage**: Browser-based data persistence
- **Props Drilling**: Simple state passing between components

### Styling
- **Tailwind CSS**: Utility classes for rapid UI development
- **Dark Mode**: Class-based dark mode with Tailwind
- **Responsive Design**: Mobile-first approach
- **Animations**: CSS transitions and transforms

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale for backgrounds and text

### Typography
- **Headings**: Inter font family
- **Body Text**: System font stack
- **Sizes**: Responsive text sizing with Tailwind

### Spacing
- **Consistent**: 4px base unit system
- **Responsive**: Scales appropriately on different screen sizes
- **Padding/Margins**: Tailwind spacing scale

## 🔧 Configuration

### Tailwind CSS
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Vite
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

**Happy Task Tracking! 🎉**
