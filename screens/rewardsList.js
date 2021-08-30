import React, { useEffect, useState } from 'react';
import { FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
    ScrollView,
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
import * as rewardsActions from '../store/actions/rewards';
import RewardItem from '../components/rewardItem';


const RewardsListScreen = props => {
    const dispatch = useDispatch();
    const rewards = useSelector(state => state.rewards.data);
    const collectedRewards = useSelector(state => state.rewards.collect);
    const [showRewards, setShowRewards] = useState(false);


    // console.log(collectedRewards.length>0)
    useEffect(() => {
        dispatch(rewardsActions.fetchRewards());
    }, [dispatch]);

    return (
        <View>
            <Button
                style={styles.button}
                onPress={() => {
                    setShowRewards(!showRewards)
                }}
                title={showRewards ? "Rewards" : "Collected rewards"}>
            </Button>
            {!showRewards && (
                <View>
                    <FlatList
                        data={rewards}
                        keyExtractor={item => item.id}
                        renderItem={itemData => (
                            <RewardItem
                                name={itemData.item.name}
                                needed_points={itemData.item.needed_points}
                            >
                            </RewardItem>
                        )}
                    />
                </View>
            )}
            {showRewards && (
                <View>
                    <FlatList
                        data={collectedRewards}
                        keyExtractor={item => item.id}
                        renderItem={itemData => (
                            <Text>{itemData.item.name}</Text>
                        )}
                    />
                    <Button
                        disabled = {collectedRewards.lenght === 0}
                        onPress={() => {
                            dispatch(rewardsActions.clearRewards());
                            setShowRewards(!showRewards)
                        }}
                        title="Clear rewards">
                    </Button>
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    button: {
        marginBottom : 10,
        backgroundColor: '#329194',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RewardsListScreen;
