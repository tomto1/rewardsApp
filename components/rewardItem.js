import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as rewardsActions from '../store/actions/rewards';

const RewardItem = props => {
    const dispatch = useDispatch();
    return (
        <View style={styles.touchable}>
            <View>
                <View style={styles.details}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.needed_points}>{props.needed_points}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={() => { dispatch(rewardsActions.addReward(props)) } }
                            style={[styles.button]}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        padding: 10,
        //backgroundColor: "#329194"
    },
    name: {
        fontFamily: 'open-sans-bold',
        flex: 3,
        fontSize: 12,
        marginVertical: 2,
        color: "#1F2B37"
    },
    needed_points: {
        fontFamily: 'open-sans-bold',
        textAlign: 'right',
        flex: 1,
        fontSize: 12,
        marginVertical: 2,
        color: "#1F2B37"
    },
    buttonContainer: {
        flex: 1,
        paddingLeft: 10
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: '#329194',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RewardItem;
