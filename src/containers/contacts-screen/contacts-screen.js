/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ContactCard from '../../components/contact-card';
import {ifIphoneX} from 'react-native-iphone-x-helper';

export default function ContactsScreen({
  contacts,
  getContacts,
  setContact,
  navigation,
  selectedContact,
}) {
  const getPhoneContacts = async () => {
    await getContacts();
  };

  useEffect(() => {
    getPhoneContacts();
  }, []);

  const onContactCardPress = (card) => {
    setContact(card);
  };

  useEffect(() => {
    if (selectedContact !== null) {
      navigation.navigate('ContactDetails');
    }
  }, [selectedContact]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>ENQUIRIES</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={contacts}
          renderItem={({item}) => (
            <ContactCard
              setContact={() => onContactCardPress(item)}
              {...item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
  },
  listWrapper: {
    flex: 1,
    paddingBottom: 50,
  },
  wrapper: {
    ...ifIphoneX({paddingTop: 50}, {paddingTop: 20}),
    flex: 1,
  },
});
