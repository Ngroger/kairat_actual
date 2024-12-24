import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen';
import NewsScreen from '../../screens/NewsScreen';
import TeamKairatScreen from '../../screens/TeamKairatScreen';
import PlayerScreen from '../../screens/PlayerScreen';
import FootballClubKairatScreen from '../../screens/FootballClubKairatScreen';
import AllMatchesScreen from '../../screens/AllMatchesScreen';
import TrainersScreen from '../../screens/TrainersScreen';
import ShopScreen from '../../screens/ShopScreen';
import FiltersScreen from '../../screens/FiltersScreen';
import CardScreen from '../../screens/CardScreen';
import SearchScreen from '../../screens/SearchScreen';
import TicketsScreen from '../../screens/TicketsScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import MyOrdersScreen from '../../screens/MyOrdersScreen';
import SubscribersScreen from '../../screens/SubscribersScreen';
import NewsClubScreen from '../../screens/NewsClubScreen';
import SelectionTeamScreen from '../../screens/SelectionTeamScreen';
import TeamJastarScreen from '../../screens/TeamJastarScreen';
import OurMissionScreen from '../../screens/OurMissionScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SuccessRegistrationScreen from '../../screens/SuccessRegistration';
import AboutAcademyScreen from '../../screens/AboutAcademyScreen';
import AcademyScreen from '../../screens/AcademyScreen';
import ContactsScreen from '../../screens/ContactsScreen';
import ChampionsTableScreen from '../../screens/ChampionsTableScreen';
import { StatusBar } from 'expo-status-bar';
import { withTranslation } from 'react-i18next';
import SubscriptionScreen from '../../screens/SubscriptionScreen';
import PlayersOfAcademy from '../../screens/PlayersOfAcademy';
import TeamU18Screen from '../../screens/TeamU18Screen';
import TeamU17Screen from '../../screens/TeamU17Screen';

const Stack = createStackNavigator();

class AppNavigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Section" component={AcademyScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Tickets" component={TicketsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ShopScreen" component={ShopScreen} options={{ headerShown: false }} />

                    <Stack.Screen name="NewsScreen" component={NewsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="PlayerScreen" component={PlayerScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="TeamKairatScreen" component={TeamKairatScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="FootballClubKairat" component={FootballClubKairatScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="AllMatches" component={AllMatchesScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="TrainersScreen" component={TrainersScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="FiltersScreen" component={FiltersScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="CardScreen" component={CardScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="TicketsScreen" component={TicketsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="MyOrders" component={MyOrdersScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Subscribers" component={SubscribersScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="NewsClubScreen" component={NewsClubScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SelectionTeam" component={SelectionTeamScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="TeamJastarScreen" component={TeamJastarScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="OurMission" component={OurMissionScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Success" component={SuccessRegistrationScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="About" component={AboutAcademyScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Academy" component={AcademyScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Contacts" component={ContactsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Table" component={ChampionsTableScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="PlayersAcademy" component={PlayersOfAcademy} options={{ headerShown: false }} />
                    <Stack.Screen name="TeamU18Screen" component={TeamU18Screen} options={{ headerShown: false }} />
                    <Stack.Screen name="TeamU17Screen" component={TeamU17Screen} options={{ headerShown: false }} />
                </Stack.Navigator>
                <StatusBar translucent />
            </NavigationContainer>
        );
    }
};

export default withTranslation()(AppNavigation);