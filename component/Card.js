import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection />
                <Image 
                        style={{width:100, height:100}}
                        source={{ uri: 'https://goo.gl/Qzu7py' }} />
                <Text> With You </Text>
                <Text> R&B </Text>
                <CardSection />
                <CardSection />
                <Image 
                        style={{width:200, height:200}}
                        source={{ uri: 'http://musicstation.kapook.com/files_music2008/picture/4/20767.jpg' }} />
                <CardSection>
                    <View style={styles.button}>
                        <View style={{ width: 100, backgroundColor: 'red' }}>
                            <Button
                                title="Buy"
                            />
                        </View>
                    </View>
           </CardSection>
           
            </View>

        );
    }
}
const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }
}
export default Card;