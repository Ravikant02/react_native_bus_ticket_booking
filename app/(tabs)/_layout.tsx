import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarStyle: {
          backgroundColor: Colors.lightGrey,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop:10,
          height:90
        },
        headerStyle:{
          backgroundColor: Colors.darkorange,
          elevation:0,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          shadowOpacity:0
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle:"Verma",
          headerStyle:{
            backgroundColor: Colors.darkorange,
            elevation:0,
            borderBottomLeftRadius:0,
            borderBottomRightRadius:0,
            shadowOpacity:0
          },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'headset' : 'headset-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'Booking',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle:"My Account",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'id-card' : 'id-card-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
