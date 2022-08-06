import React from "react";
import { View, Skeleton } from "native-base";
import { StyleSheet } from "react-native";

export default function TodoLoading() {
  return (
    <View flex="1" alignItems="center" justifyContent="center" px="4">
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
      <Skeleton w="full" rounded="md" style={styles.skeleton} />
    </View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    height: 72,
    marginVertical: 4,
  },
});
