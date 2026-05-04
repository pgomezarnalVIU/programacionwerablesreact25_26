import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabsLayout() {
  return( 
  <NativeTabs>
    <NativeTabs.Trigger name="(home)">
      <Label>Home</Label>
      <Icon src={require('@/assets/images/home.png')} />
    </NativeTabs.Trigger>
    <NativeTabs.Trigger name="(perfil)">
      <Label>Perfil</Label>
      <Icon src={require('@/assets/images/profile.png')} />
    </NativeTabs.Trigger>
  </NativeTabs>
  );
}
