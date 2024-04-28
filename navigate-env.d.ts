import type {  NativeStackScreenProp } from "@react-navigation/native-stack";
//NativeStackScreenProp,
export type HomeStackNavigatorParamList={
    LogIn:undefined;
    SignUp:undefined;
    CategoryPage:undefined;
};

export type HomeScreenNavigationProp= NativeStackScreenProp<
HomeStackNavigatorParamList, LogIn, SignUp, CategoryPage>