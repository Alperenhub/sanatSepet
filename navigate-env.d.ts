import type {  NativeStackScreenProp } from "@react-navigation/native-stack";
//NativeStackScreenProp,
export type HomeStackNavigatorParamList={
    LogIn:undefined;
    SignUp:undefined;
    CategoryPage:undefined;
    DrawerNavigation:undefined;
    Movies:undefined;
    Theatres:undefined;
    Books:undefined;
    Filmlerim:undefined;
    FirstScreen:undefined;

};


export type HomeScreenNavigationProp= NativeStackScreenProp<
HomeStackNavigatorParamList, LogIn, SignUp, CategoryPage, DrawerNavigation, Movies, Theatres, Books,Filmlerim,FirstScreen>