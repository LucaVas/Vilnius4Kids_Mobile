import Ionicons from "@expo/vector-icons/Ionicons";

type AvailableIconNames = 'map-sharp' | 'map-outline' | 'heart-sharp' | 'heart-outline' | 'menu-sharp' |  'menu-outline';

type Props = {
    color: string,
    name: AvailableIconNames,
}

export default function TabIcon({color, name}: Props) {
    return(
        <Ionicons name={name} color={color} size={24}/>
    );
}