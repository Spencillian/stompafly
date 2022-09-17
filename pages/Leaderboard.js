import { View, Text, StyleSheet, FlatList } from 'react-native';

const DATA = [
  {
    name: 'andrew_carnegie',
    kills: 34,
    rank: 1,
  },
  {
    name: 'vpeet',
    kills: 32,
    rank: 2,
  },
  {
    name: 'joe_biden',
    kills: 31,
    rank: 3,
  },
  {
    name: 'shushushu',
    kills: 30,
    rank: 4,
  },
  {
    name: 'mysta',
    kills: 30,
    rank: 5,
  },
  {
    name: '88w88',
    kills: 30,
    rank: 6,
  },
  {
    name: 'i_need_sleep',
    kills: 28,
    rank: 7,
  },
  {
    name: 'msg',
    kills: 23,
    rank: 8,
  },
  {
    name: 'luxluca',
    kills: 22,
    rank: 9,
  },
  {
    name: 'NotHRE',
    kills: 21,
    rank: 10,
  },
  {
    name: 'toad_lover',
    kills: 21,
    rank: 11,
  },
  {
    name: 'botoverlord',
    kills: 20,
    rank: 12,
  },
  {
    name: 'animepfp',
    kills: 19,
    rank: 13,
  },
];

export default function LeaderboardPage() {
  return (
    <View style={styles.container}>
      <Text>Leaderboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});