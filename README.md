# SpendSmart 💰

A cross-platform personal expense tracker built with **React Native**, **Redux Toolkit**, and **AsyncStorage**.

## Features

- ➕ **Add expenses** with category, amount, and notes
- 📊 **Pie chart** showing spending breakdown by category
- 🎯 **Monthly budget tracker** with visual progress bar
- 💾 **Persistent storage** using AsyncStorage — data saved between sessions
- 🔍 **Filter expenses** by category
- 🗑️ **Delete expenses** with confirmation
- 8 **expense categories** — Food, Transport, Shopping, Bills, Health, Entertainment, Education, Other

## Tech Stack

| Layer | Technology |
|---|---|
| Language | JavaScript (ES6+) |
| Framework | React Native 0.73 |
| State Management | Redux Toolkit |
| Persistence | AsyncStorage |
| Navigation | React Navigation v6 |
| Charts | react-native-chart-kit |

## Screenshots

> Add screenshots here after running the app

## Setup & Run

### Prerequisites
- Node.js 18+
- React Native CLI
- Android Studio (for emulator) or physical Android device

### Steps
```bash
# Clone the repo
git clone https://github.com/kumaririyaa2026/SpendSmart.git
cd SpendSmart

# Install dependencies
npm install

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios
```

## Project Structure

```
SpendSmart/
├── App.js                    # Root component with navigation
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js         # Dashboard with budget & pie chart
│   │   ├── AddExpenseScreen.js   # Add new expense form
│   │   ├── AllExpensesScreen.js  # Full expense list with filters
│   │   └── SetBudgetScreen.js    # Set monthly budget
│   ├── redux/
│   │   ├── store.js              # Redux store
│   │   └── slices/
│   │       └── expenseSlice.js   # Expense state & actions
│   └── utils/
│       ├── constants.js          # Colors, categories
│       └── storage.js            # AsyncStorage helpers
```

## License
MIT
