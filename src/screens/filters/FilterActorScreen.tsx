import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomAdjustableBotton from '../../components/buttons/CustomAdjustableButton';
import CustomCenterBotton from '../../components/buttons/CustomCenterBotton';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';

const FilterActorScreen = () => {
    return (
        <SafeAreaView style={styleBackgrounds.fondoDark}>
            <View style={{ marginTop: '4%', marginBottom: '5%' }}>
                <View style={{ ...styleWrappers.wrapperTitles, top: 0 }}>
                    <Text style={styleTitles.titleTextLight}>FILTERS</Text>
                </View>
            </View>
            <ScrollView style={styles.scrollFilterer}>
                <View>
                    <Text style={styles.filterFormText}>Gender</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='male' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Female' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Other' />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Gender</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ color: 'white' }}> aqui poner una raya</Text>
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Height</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ color: 'white' }}> aqui poner una raya</Text>
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Body Type</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Slim' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Muscular' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Large' />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Skin Tes</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Blanco' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Negro' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Marron' />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Hair Type</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Straight' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Wavy' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Curly' />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Hair Lengh</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Short' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Long' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Calvo' />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Skills</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Memorizing lines' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Singer' marginRight='5%' />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Promoting on social media' marginRight='2%' />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Singer' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Dancer' marginRight='2%' />
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Languages</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Spanish' marginRight='5%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='English' marginRight='5%' />
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Facial Hair</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Mustache' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Beard' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Chivo' marginRight='5%' />
                    </View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Hair Color</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Negro' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Marron' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Gris' marginRight='5%' />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Ginger' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Blond' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Faraon' marginRight='5%' />
                    </View>

                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.filterFormText}>Eyes color</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Sharingan' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='Biacugan' marginRight='3%' />
                        <CustomAdjustableBotton borderColor='#E5E1F6' text='No' marginRight='3%' />
                    </View>
                </View>
                <CustomCenterBotton text='Apply' width='30%' />

            </ScrollView>

        </SafeAreaView >
    );
};

export default FilterActorScreen;


const styles = StyleSheet.create({

    scrollFilterer: {
        marginHorizontal: '10%'
    },
    filterFormText: {
        color: '#E5E1F6',
        fontSize: 20
    }

})
