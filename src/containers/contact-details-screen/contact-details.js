import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContactCard from '../../components/contact-card';

export default function ContactDetails({navigation, selectedContact}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerText}>{selectedContact.name}</Text>
      </View>
      <ContactCard {...selectedContact} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    ...ifIphoneX({paddingTop: 50}, {paddingTop: 20}),
    flex: 1,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 24,
  },
});
