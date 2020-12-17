import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const colors = ['#118ab2', '#ACC196', '#799496', '#49475b', '#14080e'];

export default function ContactCard({
  name,
  categoryName,
  location,
  classLocPref,
  setContact,
}) {
  const [contactColor] = useState(colors[Math.floor(Math.random() * 4)]);

  const onPhonePress = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+1234567890}';
    } else {
      phoneNumber = 'telprompt:${+1234567890}';
    }

    Linking.openURL(phoneNumber);
  };
  return (
    <TouchableOpacity style={styles.wrapper} onPress={setContact}>
      <View style={[styles.contactLetter, {backgroundColor: contactColor}]}>
        <Text style={styles.mainLetter}>{name[0]}</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subText}>{categoryName}</Text>
        <Text style={styles.subText}>{location}</Text>
        <Text style={styles.subText}>{classLocPref}</Text>
      </View>

      <View style={styles.statusWrapper}>
        <Text style={styles.statusText}>14 Mins Ago</Text>
        <TouchableOpacity onPress={onPhonePress}>
          <Icon name="mobile-phone" color={contactColor} size={28} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderColor: 'rgba(1,1,1,0.1)',
    borderWidth: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
  },
  contactLetter: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    paddingLeft: 10,
  },
  statusWrapper: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    paddingBottom: 5,
  },
  subText: {
    fontSize: 13,
    paddingVertical: 3,
  },
  statusText: {
    fontSize: 10,
    color: 'rgba(1,1,1,0.4)',
  },
  mainLetter: {
    fontSize: 24,
    color: 'white',
  },
});
