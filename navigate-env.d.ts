import type {  NativeStackScreenProp } from "@react-navigation/native-stack";
//NativeStackScreenProp,
export type HomeStackNavigatorParamList={
    navigate(arg0: string): void;
    LogIn:undefined;
    SignUp:undefined;
    CategoryPage:undefined;
    DrawerNavigation:undefined;
    Movies:undefined;
    Theatres:undefined;
    Books:undefined;
    Filmlerim:undefined;
    FirstScreen:undefined;
    CarouselPage:undefined;
    Ucuncu:undefined;
    VideoScreen:undefined;
    RegisterScreen:undefined;
    Registration:undefined;
    Main:undefined;
};


export type HomeScreenNavigationProp= NativeStackScreenProp<
HomeStackNavigatorParamList, LogIn, SignUp, CategoryPage, DrawerNavigation, Movies, Theatres, Books,Filmlerim,FirstScreen,CarouselPage,Ucuncu,VideoScreen,RegisterScreen,Registration,Main>