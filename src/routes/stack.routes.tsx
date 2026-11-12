import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomRoutes from './bottom.routes';

type StackParamList = { Principal: undefined };
const Stack = createNativeStackNavigator<StackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Principal" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
