/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import CTabView from '../components/CTabView';
import {
  View,
  useColorScheme,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import type {PropsWithChildren} from 'react';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
function Index() {
  const [search, setSearch] = useState('');
//   const isDarkMode = useColorScheme() === 'dark';

  const updateSearch = (searchItem: any) => {
    setSearch(searchItem);
  };
  return (
    <SafeAreaView>
        <View>
      <SearchBar
        placeholder="Search for items here..."
        onChangeText={updateSearch}
        value={search}
        platform="android"
      />
      <CTabView />
      <Section title="Step One">
        Edit<Text style={styles.highlight}>App.tsx</Text> to change this screen
        and then come back to see your first change.
      </Section>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default Index;
