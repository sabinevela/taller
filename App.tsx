import { StatusBar } from 'expo-status-bar';
import { PaginaInicio } from './paginainicio/PaginaInicio';
import { PaginaDeCompras } from './paginacompras/PaginaDeCompras';
import { View } from 'react-native';

export const App=()=> {
  return (
    <View>
    {/*<PaginaDeCompras/>*/}
    <PaginaInicio/>
    </View>
  );
}
export default App;
