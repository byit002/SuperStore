import * as React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

// const viewStyle = { flex: 1, backgroundColor: '#ff4081' };
const FirstRoute = () => (
<View style={styles.tabone} >
<Text>Hello First</Text>
</View>
);

const SecondRoute = () => (
  <View style={styles.tabtwo} >
    <Text>Hello Second</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function CTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <View style = {styles.tabView}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  tabone: {
    backgroundColor: '#ff4081',
    paddingHorizontal: 24,
    flex:1,
  },
  tabtwo: {
    backgroundColor: '#673ab7',
    flex:1,
  },
  tabView:{
    flex:1,
    height:300,
  },
});
