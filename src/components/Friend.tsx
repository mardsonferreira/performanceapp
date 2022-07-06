import React, { memo } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

interface Props {
    friend: {
        id: number;
        name: string;
        likes: number;
        online: string;
    };
    follow: () => void;
}

function FriendComponent({ friend, follow }: Props) {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text>
                {friend.name} - Likes: {friend.likes}
            </Text>

            <TouchableOpacity onPress={follow}>
                <Text> Deixar de seguir</Text>
            </TouchableOpacity>

            <Text>Online em {friend.online}</Text>
        </View>
    );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.friend, nextProps.friend);
});
