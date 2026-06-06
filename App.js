import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import AllExpensesScreen from './src/screens/AllExpensesScreen';
import SetBudgetScreen from './src/screens/SetBudgetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
          <Stack.Screen name="AllExpenses" component={AllExpensesScreen} />
          <Stack.Screen name="SetBudget" component={SetBudgetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
