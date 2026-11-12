import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CadastroProduto from '../pages/cadastro-produto';
import SaidaProduto from '../pages/saida-produto';
import ControleEstoque from '../pages/controle-estoque';
import { themes } from '../global/themes';

type BottomParamList = {
  'Novo Produto': undefined;
  'Saída de Produto': undefined;
  'Controle de Estoque': undefined;
};

const Tab = createBottomTabNavigator<BottomParamList>();
const icons = {
  'Novo Produto': 'add-box',
  'Saída de Produto': 'output',
  'Controle de Estoque': 'warehouse',
} as const;

export default function BottomRoutes() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerStyle: { backgroundColor: themes.colors.background },
      headerTintColor: themes.colors.primary,
      headerTitleAlign: 'center',
      headerShadowVisible: false,
      tabBarActiveTintColor: themes.colors.primary,
      tabBarInactiveTintColor: themes.colors.muted,
      tabBarStyle: { backgroundColor: themes.colors.background, minHeight: 64 },
      tabBarLabelStyle: { fontSize: 12 },
      tabBarHideOnKeyboard: true,
      tabBarIcon: ({ color, size }) => <MaterialIcons name={icons[route.name]} color={color} size={size} />,
    })}>
      <Tab.Screen name="Novo Produto" component={CadastroProduto} />
      <Tab.Screen name="Saída de Produto" component={SaidaProduto} options={{ tabBarLabel: 'Saída' }} />
      <Tab.Screen name="Controle de Estoque" component={ControleEstoque} options={{ tabBarLabel: 'Estoque' }} />
    </Tab.Navigator>
  );
}
