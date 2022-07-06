import React, { useMemo } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';

import { Friend } from './Friend';

interface Props {
    friends: Friend[];
    follow: () => void;
}

interface Friend {
    id: number;
    name: string;
    likes: number;
    online: string;
}

export function FriendList({ friends, follow }: Props) {
    console.log(friends);
    const totalLikes = useMemo(() => {
        return friends.reduce((likes, friend) => {
            return likes + friend.likes;
        }, 0);
    }, [friends]);

    const renderItem: ListRenderItem<Friend> = ({ item }) => (
        <Friend friend={item} follow={follow} />
    );

    return (
        <View>
            <Text>Total of likes: {totalLikes}</Text>
            <FlatList
                data={friends}
                keyExtractor={(friend) => String(friend.id)}
                renderItem={renderItem}
            />
        </View>
    );
}
